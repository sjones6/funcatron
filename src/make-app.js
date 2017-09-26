const makeServer = require("./make-server")
const pipe = require("./pipe")
const makeRouter = require("./router")
const sift = require("./sift")
const makeRegistar = require("./registrar")


module.exports = routes => makeServer(pipe(
    makeRouter,
    sift,
    makeRegistar
)(routes))