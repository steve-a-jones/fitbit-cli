const authHeader = (type, val) => ({Authorization : type+' '+val});
const authBearerHeader = (token) => authHeader('Bearer', token);
const authBasicUserPassHeader = (user, pass) => {
    return authHeader('Basic', (new Buffer(user+':'+pass).toString('base64')));
}
const authBasicTokenHeader = (token) => authHeader('Basic', token);

module.exports = {
    authBearerHeader,
    authBasicTokenHeader,
    authBasicUserPassHeader
}