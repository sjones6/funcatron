const fs = require("fs")
const { join } = require("path")
const { spawn } = require('child_process')

let server;

function restart(reason, file) {
    if (reason === "rename" || /^\.git/.test(file)) {
        return
    }

    if (server) {
        server.close()
    }
    console.log("Restarting ... ")
    Object.keys(require.cache).forEach(key => {
        delete require.cache[key];
    })
    server = require('./example/app')

    // server = spawn("node", [
    //     join(process.cwd(), "./example/app.js")
    // ])
    // server.stderr.on('data', err => {
    //     console.log(`server err: ${err}`)
    // })
    // server.stdout.on('data', data => console.log(data.toString("utf8")))
}
fs.watch(process.cwd(), {recursive: true}, restart)

restart()