var inquirer = require('inquirer');

inquirer.prompt([
   {
      type: 'input',
      name: 'client_id',
      message: 'FitBit Developer Client ID:'
    },
    {
        type: 'checkbox',
        message: 'Select the API scopes you would like to authorize',
        name: 'scopes',
        choices: [
            {name:'activity'},
            {name:'nutrition'},
            {name:'heartrate'},
            {name:'location'},
            {name:'nutrition'},
            {name:'profile'},
            {name:'settings'},
            {name:'sleep'},
            {name:'social'},
            {name:'weight'}
        ]
    }
]).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
});