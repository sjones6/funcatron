const make = require("./src/make")

module.exports = {
    funcatron: make,
    group: require("./src/group"),
    make,
    pipe: require("./src/pipe"),
    stack: require("./src/stack"),
    static: require("./src/static")
}