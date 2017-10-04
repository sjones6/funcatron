const assert = require("assert")
const configure = require("./../src/configure")

describe("configure", function() {

    it("should merge an object of configuration options", () => {
        var merged = configure({opt: {https: true}});

        // Check for functions and remove
        assert.strictEqual(typeof merged.opt.err === "function", true)
        assert.strictEqual(typeof merged.opt.lost === "function", true);
        delete merged.opt.err;
        delete merged.opt.lost;

        // Check other static props
        assert.deepStrictEqual(merged.opt, {
            https: true,
            static: "public"
        })
    })

})