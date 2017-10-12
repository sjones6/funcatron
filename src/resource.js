module.exports = (path, handle) => Object.keys(handle).map(method => ({
    method,
    path,
    handler: handle[method]
}))