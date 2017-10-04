module.exports = ({routes, opt}) => ({
    opt: Object.assign({
        https: false,
        static: "public",
        err: require('./defaults/error'),
        lost: require('./defaults/lost'),
    }, (opt && typeof opt === 'object' ? opt : {})),
    routes: (routes || [])
})