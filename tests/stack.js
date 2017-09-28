const assert = require('assert')
const stack = require("./../src/stack")

describe("stack", function() {

    it("should apply each function in turn", () => {
        stack(
            ({req, next}) => {
                assert.equal(req.num, 0)
                req.num = 1
                next()
            },
            ({req}) => assert.equal(req.num, 1)
        )({req: { num: 0 }, res: 0})
    })

    it("should not call a function unless next is called", () => {
        stack(
            ({req, next}) => assert.equal(true, true),
            ({req}) => {
                throw new Error("Stack called method even though next was not called")
            }
        )({req: 0, res: 0})
    })
})