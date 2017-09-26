const {join} = require("path");
const utils = {};
utils.rootRequire = function(moduleName) {
    return require(join(process.cwd(), moduleName));
}

module.exports = utils;