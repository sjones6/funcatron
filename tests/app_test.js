const assert = require("assert");
const { rootRequire } = require("utils");

describe("application factory", function() {

    it("should return call the function parameter with a router function", function() {
        var server = rootRequire("src/app");

        var mockHttp = onRequest => onRequest(1, 2);
        var acceptsRouter = server(mockHttp);
        acceptsRouter(({req, res}) => {
            assert.equal(req, 1);
            assert.equal(res, 2);
        });
    });
});