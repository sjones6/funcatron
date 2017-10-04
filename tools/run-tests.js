const Mocha = require("mocha")
const fs = require('fs')
const { join } = require('path')

const cwd = process.cwd()

// Instantiate a Mocha instance.
const mocha = new Mocha()

// Add each .js file to the mocha instance
const readDir = dir => {
    fs.readdirSync(dir)
        .map(file => join(dir, file))
        .forEach(file => {
            if (/\.js$/.test(file)) {
                mocha.addFile(file)
            } else if (fs.lstatSync(file).isDirectory()) {
                readDir(file)
            }
        })
}

readDir(join(cwd, 'tests'))

// Run the tests.
mocha.run(failures => {
    process.on('exit', () => process.exit(failures)) // exit with non-zero status if there were failures
})