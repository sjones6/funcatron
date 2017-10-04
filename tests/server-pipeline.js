const assert = require("assert")
const makeServer = require("./../src/server-pipeline")
const { Server } = require("http")

describe("serverPipeline", function() {

    it("should return an http server when passed a router", function() {
        const httpServer = makeServer({})(() => {})
        assert.equal(httpServer instanceof Server, true)
    })

})