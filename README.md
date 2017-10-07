[![Build Status](https://travis-ci.org/sjones6/funcatron.svg?branch=master)](https://travis-ci.org/sjones6/funcatron)
[![Chat at https://gitter.im/funcatron-funcatron/core](https://badges.gitter.im/funcatron-funcatron/Lobby.svg)](https://gitter.im/funcatron-funcatron/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
        path: "/login",
        method: "post",
        handler: ({req, res}) => res.end("Post request received")
    }
]).listen(8000)
```

## Contributing

Contributions welcome on [Github](https://github.com/sjones6/funcatron/pulls). All core-API changes should also be accompanied by a change-request to [the documentation](https://github.com/sjones6/funcatron-docs).

Before making a contribution, please review the [Code of Conduct](https://github.com/sjones6/funcatron/blob/master/CODE_OF_CONDUCT.md).

If you're new to Open Source, I'd love if Funcatron was your first project that you contribute to. Check-out the [Contributing](https://github.com/sjones6/funcatron/blob/master/CONTRIBUTING.md) document for how to get started.

## Issues

Issues gladly accepted on [Github](https://github.com/sjones6/funcatron/issues).
