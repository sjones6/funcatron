const request = require('supertest')
const servers = require('./servers')

servers((app, type) => {
    describe(`E2E ${type}: 404`, function() {
    
        it('should return a 404 for a route not found', done => {
            request(app)
                .get('/asdfasdasd')
                .expect(404, done);
        })
    
    })
})

