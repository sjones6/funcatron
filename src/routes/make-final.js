const stack = require('../stack')
const pipe = require('../pipe')
const serveStatic = require('serve-static')

module.exports = opt => (
    opt.static ? {
        handler: stack(
            pipe(
                staticPath => serveStatic(staticPath),
                serveStatic => ({req, res, next}) => serveStatic(req, res, next)
            )(opt.static),
            opt.lost
        )
    } : {handler: opt.lost}
)