const https   = require('https');
const morphfn = require('morphfn');

const httpHeaders  = (headers) => ({headers : Object.assign({}, ...headers)});
const httpHostname = (hostname) => ({hostname : hostname});
const httpPath     = (path) => ({path : path});
const httpPort     = (port) => ({port : parseInt(port, 10)});
const httpMethod   = (method) => ({method : method.toUpperCase()});
const httpConfig   = (...configs) => Object.assign({}, ...configs);

const APIRequest = (httpConfig, httpBody) => {
    return new Promise((success, failure) => {
        let request = https.request(httpConfig, success);
        (httpBody && request.write(httpBody));
    	request.end();
        request.on('error', failure);
    });
};

module.exports = morphfn((method, headers, host, path, body) => {
    return APIRequest(
        httpConfig(
            httpMethod(method),
            httpHostname(host),
            httpPath(path),
            httpHeaders([].concat(headers)),
            httpPort(443)
        ),
        (body || undefined)
    );
});







