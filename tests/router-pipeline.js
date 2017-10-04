const assert = require('assert')

const routerPipeline = require('./../src/router-pipeline')

describe('routerPipeline', function() {
    
    it('should take a options object', () => {
        assert(typeof routerPipeline({}), 'function')
    })

    it('should take a function to pass the router into', () => {
        routerPipeline({})(router => assert(typeof router, 'function'))
    })

    it('should return an HTTP server', () => {
        const { createServer, Server } = require('http')
        const server = routerPipeline({})(createServer)

        assert.strictEqual(server instanceof Server, true)
    })

})