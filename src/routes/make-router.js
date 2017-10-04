// sift through routes and find a matching route
// for the request to pass the request to
const pipe = require('../pipe')

const makeFinal = require('./make-final')
const sift = require('./sift')

module.exports  = ({opt, routes}) => pipe(
    makeFinal,
    sift(routes)
)(opt)