// sift through routes and find a matching route
// for the request to pass the request to
const parse = require('route-parser')
const pathToRegExp = require('path-to-regexp')
const lost = require('./404')

module.exports  = routes => ({method, url}) => (
    routes.find(route => {

        // Route has a path that matches the request url; or no path
        return (!route.path || (pathToRegExp(route.path)).test(url)) 

                // And the route has no method, or the method matches
                && (route.method ? (method === route.method.toLowerCase()) : true)
    })
    || lost // no route found, pass to 404 handler
).handler