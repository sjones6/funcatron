# Funcatron

A functional framework for composing Node applications

## Installation

`npm install funcatron --save` or `yarn add funcatron`

## Usage

```javascript

const {
    funcatron,
    stack
} = require("funcatron")

// Pass funcatron an array of route definitions
funcatron([

    // BASIC PATH
    {
        path: '/', // match all methods to base url
        handler: ({req, res}) => res.end("Hello World! yours sincerely, funcatron")
    },

    // REQUEST METHODS
    {
        method: 'post',
        path: '/post-only',
        handler: ({req, res}) => res.end("Post request received")
    },

    // MIDDLEWARE
    {
        path: '/rainbow',

        // Create middleware using the `stack` method
        handler: stack(
            ({req, res, next}) => { console.log("MIDDLEWARE"); next() },
            ({req, res, next}) => { console.log("MIDDLEWARE 2"); next() },
            ({req, res}) => res.end("Double Rainbow!")
        )
    },

    // 404
    {
        // catch-all for all methods and paths if not matched
        handler: ({req, res}) => res.end(`Sorry, you seem to be lost. ${req.url} is not valid`)
    }
]).listen(8000)
```

## Contributing

Contributions welcome (with tests and documentation) on [Github](https://github.com/sjones6/funcatron/pulls).

## Issues

Issues gladly accepted on [Github](https://github.com/sjones6/funcatron/issues).