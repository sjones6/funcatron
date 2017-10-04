const assert = require('assert')
const wrapRequest = require('./../src/wrap-request')

describe('wrapRequest', function() {
    it("should take an options object and return a function", () => {
        assert.equal(typeof wrapRequest({}), 'function');
    })

    it("should take a callable router to pass HTTP req/res to", () => {
        const wrapper = wrapRequest({})
        assert.equal(typeof wrapper(() => {}), 'function');
    })

    it("should take a callable router to pass HTTP req/res to", () => {
        const wrapper = wrapRequest({})
        const fakeRouter = request => {
            assert.equal(request, 0);

            return ({req, res}) => {
                assert.equal(req, 0)
                assert.equal(res, 1)
            }
        } 
        const core = wrapper(fakeRouter)
        core({req: 0, res: 1})
    })

    it("should catch thrown errors", () => {
        const core = wrapRequest({
            opt: {
                err: ({req, res, err}) => {
                    assert(err instanceof Error, true)
                    assert.strictEqual(req, 0)
                    assert.strictEqual(res, 1)
                }
            }
        })(request => {
            throw new Error();
        })

        core({req: 0, res: 1})
    })
})