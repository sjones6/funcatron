# Funcatron

A functional framework for composing Node applications

## Documentation

See [Full API Documentation](https://sjones6.gitbooks.io/funcatron/content/) (in progress).

## Installation

`npm install funcatron --save` or `yarn add funcatron`

## Usage

```javascript

const { funcatron } = require("funcatron")

// Pass funcatron an array of route definitions
funcatron([
    {
        path: "/",
        method: "get",
        handler: ({req, res}) => res.end("Hello World! yours sincerely, funcatron")
    },
    {
        path: "/post-only",
        method: "post",
        handler: ({req, res}) => res.end("Post request received")
    }
]).listen(8000)
```

## Contributing

Contributions welcome (with tests and documentation) on [Github](https://github.com/sjones6/funcatron/pulls).

## Issues

Issues gladly accepted on [Github](https://github.com/sjones6/funcatron/issues).