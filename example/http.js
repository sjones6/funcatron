const { make } = require('./../index')

const routes = require('./routes')

const funci = make({
    static: "example/static"
})

module.exports = funci(routes)