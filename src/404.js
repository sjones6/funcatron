module.exports = {
    handler: ({req, res}) => {
        res.statusCode = 404
        res.end('Not found')
    }
}