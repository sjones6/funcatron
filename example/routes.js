const { static } = require("./../index")

module.exports = [
    ...static("example/static"),
    ...require('./auth'),
    ...require('./user')
]