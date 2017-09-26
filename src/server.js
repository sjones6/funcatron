module.exports = createServer => router => {
    return createServer((req, res) => router({req, res}));
}
