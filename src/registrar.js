module.exports = router => ({req, res}) => {
    try {
        router(req).call(null, ({req, res}))
    } catch (e) {
        console.log(e.stack)
        res.statusCode = 500; 
        res.end("Internal server error")
    }
}