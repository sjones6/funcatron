module.exports = ({err, req, res}) => {
    console.log(e.stack)
    res.statusCode = 500; 
    res.end("Internal server error")
}