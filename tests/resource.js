const assert = require('assert')

const { resource } = require('../index')

describe("resource", function() {

    const path = "/user"
    const routes = resource(path, {
        get: (() => {}),
        post: (() => {})
    })

    it("should take a path and resource and return an array of routables", () => {
        assert.deepStrictEqual(Object.keys(routes[0]), ['method', 'path', 'handler'])
    })

    it("should share the same path between all routeables", () => {
        assert.strictEqual(routes[0].path, path)
        assert.strictEqual(routes[1].path, path)
    })

    it("should spread the methods specified by the handler keys", () => {
        assert.strictEqual(routes[0].method, 'get')
        assert.strictEqual(routes[1].method, 'post')
    })

})