module.exports = (...fns) => fns.reduceRight((next, fn) => {
    return (({req, res}) => fn.call(null, next ? {req, res, next} : {req, res}))
}, null)