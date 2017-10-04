const { stack } = require('./../index')

module.exports = stack(
    ({req, res, next}) => next({req, res}),
    ({req, res, next}) => next({req, res}),
    stack(
        ({req, res, next}) => next(),
        stack(
            ({req, res, next}) => next(),
            ({req, res, next}) => next({req, res})
        )
    ),
    stack(
        ({req, res, next}) => next({req, res})
    )
)