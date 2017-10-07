const assert = require('assert')

const eagerStack = require('./../src/eager-stack')

describe('eagerStack', function() {
    it('should eagerly evaluate the middleware methods', () => {
        const stack = eagerStack(
            ({req, res, next}) => {
                assert.strictEqual(req, 0)
                next({req: 1, res: 2})
            },
            ({req, res}) => {
                assert.strictEqual(req, 1)
            }
        )
        stack({req: 0, res: 1})
    })
})