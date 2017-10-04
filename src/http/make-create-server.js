const { createServer } = require("http")
const { createServer: createHttpsServer } = require("https")

module.exports = (https = false) => https ? (router => createHttpsServer(https, router)) : createServer;