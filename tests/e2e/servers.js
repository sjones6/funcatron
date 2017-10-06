const servers = [
    {
        server: require('./../../example/http'),
        type: 'http'
    }, 
    {
        server: require('./../../example/https'),
        type: 'https'
    }
]

module.exports = test => servers.forEach(({ server, type }) => test(server, type))