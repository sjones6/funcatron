const f = require("./src/funcatron")

f.funcatron = f
f.make = require("./src/make")
f.group = require("./src/group")
f.pipe = require("./src/pipe")
f.stack = require("./src/stack")

module.exports = f