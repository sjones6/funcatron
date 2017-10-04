const assert = require('assert')

const group = require('../src/group')

describe('group', function() {
    
    it('should take a default options object', () => {
        assert(typeof group({}), true)
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