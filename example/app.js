const {
    funcatron,
    stack
} = require("./../index")

const http = funcatron([
    ...require('./auth'),
    ...require('./user')
])

http.listen(9025)

module.exports = http;