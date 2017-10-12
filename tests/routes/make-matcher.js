const assert = require('assert')

const makeMatcher = require('./../../src/routes/make-matcher')


describe('routes/make-matcher', function() {

    const testPath = "/some-path";
    const matcher = makeMatcher(path => {
        assert.strictEqual(path, testPath)
        return new RegExp(path)
    })

    it("should take a function that constructs a regular expression to match the path", () => {
        matcher({
            route: {
                path: testPath
            },
            url: testPath
        })
    })

    it("should match the request method if given even if cases mismatch", () => {
        assert.strictEqual(matcher({
            route: {
                path: testPath,
                method: "GET"
            },
            url: testPath,
            method: "get"
        }), true)
    })

    it("should fail to match if the methods are different", () => {
        assert.strictEqual(matcher({
            route: {
                path: testPath,
                method: "GET"
            },
            url: testPath,
            method: "post"
        }), false)
    })

    it("should match all methods if no method is specified", () => {
        assert.strictEqual(matcher({
            route: { path: testPath },
            url: testPath,
            method: "post"
        }), true)
        assert.strictEqual(matcher({
            route: { path: testPath },
            url: testPath,
            method: "get"
        }), true)
        assert.strictEqual(matcher({
            route: { path: testPath },
            url: testPath,
            method: "head"
        }), true)
    })

})