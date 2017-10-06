const request = require('supertest')
const servers = require('./servers')

servers((app, type) => {
    describe(`E2E ${type}: Static file serving`, function() {
        
        it('should serve html', done => {
            request(app)
                .get('/funci.html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        })

        it('should serve css', done => {
            request(app)
                .get('/funci.css')
                .expect('Content-Type', /css/)
                .expect(200, done);
        })

        it('should serve js', done => {
            request(app)
                .get('/script.js')
                .expect('Content-Type', /javascript/)
                .expect(200, done);
        })

    })
})
