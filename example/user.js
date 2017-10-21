module.exports = [
    {
        path: '/user',
        method: 'get',
        handler: ({req, res}) => res.end("User profile")
    }
]