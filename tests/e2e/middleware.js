const request = require('supertest')

const servers = require('./servers')
servers((app, type) => {
    describe(`E2E ${type}: middleware`, function() { 
        this.timeout(4000)
        it('should run all middleware', done => {
            request(app)
                .get('/auth/login')
                .expect(200, done);
        })
    })
})
