const request = require('supertest')

const servers = require('./servers')

servers((app, type) => {
    describe(`E2E ${type}: requests`, function() { 
        this.timeout(4000)
        it('should route a basic get request', done => {
            request(app)
                .get('/auth/login')
                .expect(200, done);
        })

        it('should route to a route with query params', done => {
            request(app)
                .get('/user?id=1')
                .expect(200, done);
        })
    })
})