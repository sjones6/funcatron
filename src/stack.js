module.exports = (...fns) => ({req, res}) => {
    let i = -1;
    const next = () => {
        i++;
        fns[i].call(null, (fns[i + 1] ? {req, res, next} : {req, res}))   
    }
    next();
}