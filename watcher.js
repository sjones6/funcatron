const fs = require("fs")
const { join } = require("path")
const { spawn } = require('child_process')

let server;

function restart() {
    if (server) {
        server.kill()
    }
    console.log("Restarting ... ")
    server = spawn("node", [
        join(process.cwd(), "app.js")
    ])
    server.stderr.on('data', err => {
        console.log(`server err: ${err}`)
    })
    server.stdout.on('data', data => console.log(data.toString("utf8")))
}
fs.watch(process.cwd(), {recursive: true}, restart)

restart()