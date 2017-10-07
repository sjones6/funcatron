const fs = require("fs")
const { join } = require("path")
const { spawn } = require("child_process")


let server;

process.on("uncaughtException", e => console.log(e.stack));


function restartServer() {
    if (server) {
        server.close()
    }
    console.log("Restarting ... ")
    Object.keys(require.cache).forEach(key => {
        delete require.cache[key];
    })
    server = require('../example/app')
}


function restart(reason, file) {
    if (reason === "rename" || /^\.git/.test(file)) {
        return
    }

    tester = spawn("node", [
        join(process.cwd(), "/tools/run-tests.js")
    ], {
        stdio: 'inherit'
    })

    tester.on('exit', code => {
        if (code !== 0) {
            console.log("Tests errored out. Please fix before continuing.")
        } else {
            restartServer()
        }
    })
}
fs.watch(process.cwd(), {recursive: true}, restart)

restart()