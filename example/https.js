const { make } = require('./../index')

const routes = require('./routes')

const funci = make({
    static: "example/static",
    http: require("./certs/certs")
})

module.exports = funci(routes)