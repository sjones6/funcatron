const request = require('supertest')

const app = require('./app')
describe('E2E: middleware', function() {

    this.timeout(4000)

    it('should run all middleware', done => {
        request(app)
            .get('/auth/login')
            .expect(200, done);
    })

})