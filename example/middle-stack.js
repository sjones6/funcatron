const { stack } = require('./../index')

module.exports = stack(
    ({req, res, next}) => {
        console.log('stacked')
        next({req, res})
    },
    ({req, res, next}) => {
        console.log('final')
        next({req, res})
    },
    stack(
        ({req, res, next}) => {
            console.log('nexted 3 layers deep')
            setTimeout(() => next(), 500)
        },
        stack(
            ({req, res, next}) => {
                console.log('nexted 4 layers deep, pt a ')
                setTimeout(() => next(), 500)
            },
            ({req, res, next}) => {
                console.log('nexted 4 layers deep, part b ')
                next({req, res})
            }
        )
    ),
    stack(
        ({req, res, next}) => {
            console.log('nexted 3 layers deep; only after 4 part b')
            next({req, res})
        }
    )
)