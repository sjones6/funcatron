const request = require('supertest')

const app = require('./../../example/basic')

describe(`E2E basic: Basic App`, function() {
    it('should run all middleware', done => {
        request(app)
            .get('/auth/login')
            .expect(200, done);
    })
})