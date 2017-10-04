const pipe = require("./pipe")
const configure = require("./configure")
const makeRouter = require("./routes/make-router")
const wrapRequest = require("./wrap-request")

module.exports = ctx => makeHttpServer => pipe(
    configure,
    makeRouter,
    wrapRequest(ctx),
    makeHttpServer
)(ctx)