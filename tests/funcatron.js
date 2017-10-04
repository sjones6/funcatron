const assert = require('assert')

const funcatron = require('./../src/funcatron')

describe('funcatron', function() {

    it('should return an HTTP server', () => {
        const { Server } = require('http')
        assert(funcatron([]) instanceof Server, true)
    })
})