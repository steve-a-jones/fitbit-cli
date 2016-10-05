#!/usr/bin/env node
const fs   = require('fs');
const cli  = require('commander');
const path = require('path')

const setVersion = () => cli.version(require('./package').version);

const loadCommands = (shouldLoad) => {
    const commandsDir = 'src';
    fs.readdirSync(commandsDir)
    .forEach((commandFileName)=> {
        (
            shouldLoad(commandFileName) &&
            require('./'+path.join(commandsDir, commandFileName))(cli)
        )
    });
}

const loadCommmandSwitch = (commandFileName) => {
    return commandFileName !== 'default.js';
};

const loadDefaultCommand = () => {
    require('./src/default')(cli);
};

const makeCommandOptionsGlobal = () => {
    cli.commands.forEach((command)=> {
        command.options.forEach((option)=> {
            cli.option(option.flags, option.description);
        });
    });
};

const parseCliArgs = () => cli.parse(process.argv);

const init = () => {
    setVersion();
    loadCommands(loadCommmandSwitch);
    makeCommandOptionsGlobal();
    loadDefaultCommand();
    parseCliArgs();
}

init();