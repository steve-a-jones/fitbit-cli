const fbApiRequest = require('./fb-api-request');
const utils        = require('./utils');
const fbApiConst   = require('./fb-api-const');
const fs           = require('fs');

const oAuthCache = () => JSON.parse(fs.readFileSync(fbApiConst.oAuthConfigCache));

const oAuthRefreshToken = () => oAuthCache().refreshToken;

const requestNewOAuthTokenFromServer = (refreshToken) => {
    return fbApiRequest(
        'POST',
        [
            utils.authBasicTokenHeader(refreshToken),
            {'Content-Type' : 'application/x-www-form-urlencoded'}
        ],
        fbApiConst.fbAPIHostname,
        fbApiConst.fbAPITokenEndpoint
    );
};

const updateOAuthCache = (oAuthAPIResultStream) => {
    return new Promise((res, rej)=>{
        let ws = fs.createWriteStream(fbApiConst.oAuthConfigCache);
        oAuthAPIResultStream.pipe(ws);
        ws.on('finish', res);
        ws.on('error', rej);
    });
};

module.exports = () => {
    return (
        requestNewOAuthTokenFromServer(oAuthRefreshToken())
        .then(updateOAuthCache)
    )
};