const pipe = require("./pipe")
const routerPipeline = require("./router-pipeline")
const serverPipeline = require("./server-pipeline")

module.exports = opt => routes => pipe(
    serverPipeline,
    routerPipeline({opt, routes})
)(opt)