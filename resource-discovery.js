const fBresourceMap = require('./resource-map');

const rootContextExists = (rootContext) => fBresourceMap.hasOwnProperty(rootContext);

const getResource = (rootContext, suppliedOptions) => {
    let resourceContext = fBresourceMap[rootContext];
    let resourceFn = (
        resourceContext.find((resourceFn) => resourceFn.length === suppliedOptions.length) ||
        () => ''
    );
    return resourceFn(...suppliedOptions);
}

const isValidResource = (resource) => {
    return typeof resource === 'string' && resource.length > 0;
}

module.exports = (rootContext, suppliedOptions) => {
    return new Promise((res, rej)=>{
        if (!rootContextExists(rootContext)) rej('Resource: ['+rootContext+'] does not exist! Check API Docs.');
        else {
            let resourceTemplate = getResourceTemplate(rootContext, suppliedOptions);
            if (isValidResource(resource)) res(resource)
            else rej('Invalid parameters supplied for Resource: ['+rootContext+']. Check API Docs.')
        }
    });
};