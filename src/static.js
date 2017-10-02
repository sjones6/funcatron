const { join } = require('path')
const pipe = require('./pipe')

const serveStatic = require('serve-static')

module.exports = dir => pipe(
    pathPartial => serveStatic(join(process.cwd(), pathPartial)),
    serveStatic => ([{
        path: '/:filename\\.(html|htm|css|js|json|jpeg|jpg|png|woff|ttf|gif|ico|xml|mpg|mpeg|mpe|txt)',
        handler: ({req, res}) => serveStatic(req, res, () => {
            res.statusCode = 404
            res.end("Not found")
        })
    }])
)(dir)