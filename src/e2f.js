/**
 * A quick utility method to convert Express middleware
 * to funcatron middleware.
 */
module.exports = fn => ({req, res, next}) => fn(req, res, next)