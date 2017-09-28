const pipe = require("./pipe")
const router = require("./router")
const makeRegistar = require("./registrar")
const makeServer = require("./server")

module.exports = routes => pipe(
    router,
    makeRegistar,
    makeServer
)(routes)