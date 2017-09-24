const path = require('path');
const captalizeComponentPath = require('./captalizeComponentPath');

function buildComponentPath(options = {}) {
    const {
        svgSrcDir,
        componentDestDir,
        svgPath,
        prefix = '',
        suffix = '',
    } = options;

    const svgRelativePath = path.parse(path.relative(svgSrcDir, svgPath));
    const componentRelativePathStr = path.join(svgRelativePath.dir, `${prefix}${svgRelativePath.name}${suffix}`);
    return path.join(componentDestDir, captalizeComponentPath(componentRelativePathStr));
}

module.exports = buildComponentPath;
