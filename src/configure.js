module.exports = (cli) => {
    cli
    .command('configure')
    .description('Configure developer access to the FitBit API')
    .option('-cid, --client-id <client-id>', 'OAuth 2.0 Client ID')
    .option('-cs, --client-secret <client-secret>', 'OAuth 2.0 Client Secret')
    .action(()=>{
        console.log(arguments);
    })
};