const makeApp = require("./src/make-app")

makeApp(({req, res}) => res.end("Hello World, from Funcatron")).listen(9025)