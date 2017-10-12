const assert = require('assert')

const { Server } = require('http')
const { Server: HttpsServer } = require('tls')
const makeCreateServer = require('../../src/http/make-create-server')

describe('make create server', function() {

    it("should return a function when passed an http option", () => {
        assert.strictEqual(typeof makeCreateServer(false), 'function')
        assert.strictEqual(typeof makeCreateServer({}), 'function')
        assert.strictEqual(typeof makeCreateServer(true), 'function')
    })

    it("should make an HTTP server (not HTTPs) when HTTPS is disabled", () => {
        const makeserver = makeCreateServer(false)
        assert.strictEqual(makeserver(() => {}) instanceof Server, true)
    })

    it("should make an HTTPs server (not HTTP) when HTTPS is enabled", () => {
        const makeserver = makeCreateServer({})
        assert.strictEqual(makeserver(() => {}) instanceof HttpsServer, true)
    })

})