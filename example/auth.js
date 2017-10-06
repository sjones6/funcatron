const { group, stack } = require('./../index')
const middleStack = require('./middle-stack')

const makeAuth = group({
    path: '/auth',
    handler: middleStack
})

module.exports = makeAuth([
    {
        path: '/login',
        handler: stack(
            ({req, res, next}) => next({req, res}),
            middleStack,
            ({req, res}) => {
                res.end("Logged in!")
            }
        )
    },
    {
        path: '/logout',
        handler: ({req, res}) => res.end('Logged out!')
    }
])