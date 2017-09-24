const _ = require('lodash');

function camelizeElementAttributes(element) {
    const attributeNames = _.map(element.attributes, 'nodeName');
    attributeNames.forEach((attributeName) => {
        if (_.includes(attributeName, '-') || _.includes(attributeName, ':')) {
            const value = element.getAttribute(attributeName);
            element.removeAttribute(attributeName);
            element.setAttribute(_.camelCase(attributeName), value);
        }
    });

    if (element.children && element.children.length) {
        element.children.forEach((element) => {
            camelizeElementAttributes(element);
        });
    }
}

module.exports = camelizeElementAttributes;
