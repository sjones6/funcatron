const assert = require("assert")
const pipe = require("./../src/pipe")

describe("pipe", function() {

    it("should take a set of methods to pipe return values through", () => {
        pipe(
            val => val + 1,
            val => val + 1,
            val => assert.equal(val, 3)
        )(1)
    })

})