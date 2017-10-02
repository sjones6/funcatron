const Mocha = require("mocha")
const fs = require('fs')
const { join } = require('path')

const cwd = process.cwd()

// Instantiate a Mocha instance.
var mocha = new Mocha()

// Add each .js file to the mocha instance
fs.readdirSync(join(cwd, 'tests'))
    .filter(file => file.substr(-3) === '.js')
    .forEach(file => mocha.addFile(join(cwd, 'tests', file)))

// Run the tests.
mocha.run(failures => {
    process.on('exit', () => process.exit(failures)) // exit with non-zero status if there were failures
})