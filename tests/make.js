const assert = require('assert')

const make = require('./../src/make')

describe('make', function() {

    it('should take a options object', () => {
        assert(typeof make({}), 'function')
    })

    it('should return an HTTP server', () => {
        const { Server } = require('http')
        assert(make({})([]) instanceof Server, true)
    })
})