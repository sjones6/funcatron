module.exports = ({opt}) => router => ({req, res}) => {
    try {
        router(req).call(null, ({req, res}))
    } catch (err) {
        opt.err({err, req, res});
    }
}