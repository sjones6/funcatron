const { static } = require("./../index")

module.exports = [
    ...require('./auth'),
    ...require('./user')
]