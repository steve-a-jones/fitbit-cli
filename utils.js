const fs = require('fs')

const cacheFileName = './.cache';

const authHeader = (type, val) => ({Authorization : type+' '+val});
const authBearerHeader = (token) => authHeader('Bearer', token);
const authBasicUserPassHeader = (user, pass) => authHeader('Basic', (new Buffer(user+':'+pass).toString('base64')));
const authBasicTokenHeader = (token) => authHeader('Basic', token);

const oAuthCache = () => JSON.parse(fs.readFileSync(cacheFileName));

const oAuthRefreshToken = () => oAuthCache().refreshToken;

const updateOAuthCache = (attr, val) => fs.writeFileSync(
    cacheFileName,
    JSON.stringify(
        Object.assign(
            oAuthCache(),
            {[attr] : val}
        )
    )
);

module.exports = {
    oAuthCache,
    oAuthRefreshToken,
    updateOAuthCache,
    authBearerHeader,
    authBasicTokenHeader,
    authBasicUserPassHeader
}