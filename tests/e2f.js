const assert = require('assert')

const { e2f } = require('../index')

describe('e2f', function() {

    it('should spread funcatron params in for compatability with Express middleware', () => {
        const funcified = e2f((req, res, next) => {
            assert.strictEqual(req, 0)
            assert.strictEqual(res, 1)
            assert.strictEqual(next, 2)
        })
        funcified({
            req: 0,
            res: 1,
            next: 2
        })
    })
})