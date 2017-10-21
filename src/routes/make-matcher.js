module.exports = pathToRegExp => ({route, url, method}) => {

        // Route has a path that matches the request url; or no path
        return (!route.path || (pathToRegExp(route.path)).test(url.replace(/\?.*/, ''))) 

                // And the route has no method, or the method matches
                && (route.method ? (method.toLowerCase() === route.method.toLowerCase()) : true)
}