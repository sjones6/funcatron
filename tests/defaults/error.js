const assert = require('assert')

const errorHandler = require('./../../src/defaults/error')

describe("default error handler", function() {

    it('should set the error status code', () => {
        let mockRes = {
            end: function() {}
        }
        errorHandler({res: mockRes})
        assert.strictEqual(mockRes.statusCode, 500)
    })

    it('should call the end method with a message', () => {
        let mockRes = {
            end: function(msg) {
                assert.strictEqual("Internal server error", msg)
            }
        }
        errorHandler({res: mockRes})
    })
})