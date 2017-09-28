const {
    make,
    stack
} = require("./index")

make([
    {
        path: '/',
        handler: ({req, res}) => res.end("Hello World, Yours Sincerely, Funcatron")
    },
    {
        path: '/rainbow',
        handler: stack(
            ({req, res, next}) => { console.log("MIDDLEWARE"); next() },
            ({req, res, next}) => { console.log("MIDDLEWARE 2"); next() },
            ({req, res, next}) => { console.log("MIDDLEWARE 3"); next() },
            ({req, res}) => res.end("Double Rainbow!")
        )
    },
    {
        path: '/asg',
        handler: ({req, res}) => { throw new Error("Sucker!") }
    },
    {
        path: '/user/:user',
        handler: ({req, res}) => res.end("Hey, User!")
    },
    {
        handler: ({req, res}) => res.end(`Sorry, you seem to be lost. ${req.url} is not valid`)
    }
]).listen(9025)