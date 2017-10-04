const request = require('supertest')

const app = require('./app')
describe('E2E: 404', function() {

    it('should return a 404 for a route not found', done => {
        request(app)
            .get('/asdfasdasd')
            .expect(404, done);
    })

})