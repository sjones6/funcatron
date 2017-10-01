const { join } = require("path")
const stack = require("./stack")

module.exports = defaults => routes => routes.map(route => ({
    path: join(defaults.path ? defaults.path : "", route.path),
    handler: defaults.handler ? stack(defaults.handler, route.handler) : route.handler,
    method: route.method || null
}))