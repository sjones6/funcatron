const matchRoute = require('./matcher');

module.exports = routes => final => (({method, url}) => (
    routes.find(route => matchRoute({route, url, method})) || final // no route found, pass to final handler
).handler)