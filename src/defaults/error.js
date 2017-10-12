module.exports = ({err, req, res}) => {
    res.statusCode = 500; 
    res.end("Internal server error")
}