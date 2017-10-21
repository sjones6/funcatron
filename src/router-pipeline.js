const pipe = require("./pipe")
const configure = require("./configure")
const makeRouter = require("./routes/make-router")
const wrapRequest = require("./wrap-request")

module.exports = ctx => makeHttpServer => {
    const opt = configure(ctx)
    return pipe(
        makeRouter,
        wrapRequest(opt),
        makeHttpServer
    )(opt)
}