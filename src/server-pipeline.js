const pipe = require('./pipe')
const getMaker = require('./http/make-server')
const makeHttp = require('./http/http')

module.exports = opt => pipe(
    getMaker,
    makeHttp
)(opt)