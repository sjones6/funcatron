const { readFileSync } = require('fs')
const { join } = require('path')

module.exports = {
    key: readFileSync(join(__dirname, 'server.key')),
    cert: readFileSync(join(__dirname, 'server.crt'))
}

