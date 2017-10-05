const assert = require('assert')

const group = require('../src/group')

describe('group', function() {
    
    it('should take a default options object', () => {
        assert.strictEqual(typeof group({}) === 'function', true)
    })

    it('should return a new routes array given a route array', () => {
        assert.strictEqual(Array.isArray(group({})([])), true)
    })

    it('should handle a route partial with params and special chars', () => {
        const handler = (() => {})
        const makeUserGroup = group({
            path: "/user"
        })

        const userGroup = makeUserGroup([
            {
                path: "/:user/profile",
                handler
            },
            {
                path: "/:user/(.*)",
                handler
            },
            {
                path: "/:user?",
                handler
            }
        ])

        assert.strictEqual(userGroup[0].path, "/user/:user/profile")
        assert.strictEqual(userGroup[1].path, "/user/:user/(.*)")
        assert.strictEqual(userGroup[2].path, "/user/:user?")
    })

    it('should apply a set of group options', () => {
        const makeTestGroup = group({
            path: '/auth',
        })

        let testHandler = (() => {});
        const testGroup = makeTestGroup([
            {
                path: 'here',
                method: 'get',
                handler: testHandler
            }
        ])

        testGroup.map(route => {
            assert.strictEqual(/^\/auth/.test(route.path), true)
            assert.strictEqual(route.handler, testHandler)
        })
    })

    it('should apply a middleware method', () => {
        const testHandler = (() => {});
        const makeTestGroup = group({
            path: '/auth',
            handler: testHandler
        })
        const testGroup = makeTestGroup([
            {
                path: 'here',
                method: 'get',
                handler: testHandler
            }
        ])

        testGroup.map(route => {
            assert.notStrictEqual(route.handler, testHandler)
        })
    })

})