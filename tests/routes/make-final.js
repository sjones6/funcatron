const assert = require('assert')

const makeFinal = require('./../../src/routes/make-final')

describe('routes/make-final', function() {

    it('should return a routeable object when passed a configuration object', () => {
        assert.strictEqual(typeof makeFinal({}), 'object')
        assert.strictEqual(typeof makeFinal({
            lost: () => {}
        }).handler, 'function')
    })

    it('should bypass the static service when a static path is not provided', () => {
        const lost = () => {};
        assert.strictEqual(makeFinal({lost}).handler, lost)
    })

    it('should bypass the static service when the static option is false', () => {
        const lost = () => {};
        assert.strictEqual(makeFinal({lost, static: false}).handler, lost)
    })

    it('should attempt to serve static files when the static path is not false', () => {
        const lost = () => {};
        assert.notStrictEqual(makeFinal({lost, static: "/"}).handler, lost)
    })

})