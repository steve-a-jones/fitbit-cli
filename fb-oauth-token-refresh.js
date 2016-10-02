const fbApiRequest = require('./fb-api-request');
const utils        = require('./utils');
const fbApiConst   = require('./fb-api-const');

module.exports = () => {
    return fbApiRequest(
        'POST',
        [
            utils.authBasicTokenHeader(utils.oAuthRefreshToken),
            {'Content-Type' : 'application/x-www-form-urlencoded'}
        ],
        fbApiConst.fbAPIHostname,
        fbApiConst.fbAPITokenEndpoint
    );
};