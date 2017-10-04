module.exports = ({req, res}) => {
    res.statusCode = 404
    res.end('Not found')
};