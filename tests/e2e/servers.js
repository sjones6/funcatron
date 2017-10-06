const { existsSync } = require('fs')

const servers = [
    {
        server: require('./../../example/http'),
        type: 'http'
    }
]

if (existsSync('example/certs/server.key')) {
    servers.push({
        server: require('./../../example/https'),
        type: 'https'
    })
}


module.exports = test => servers.forEach(({ server, type }) => test(server, type))