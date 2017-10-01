const _ = require('lodash');

function setElementColorAttributeValue(element, value, attributes = ['fill', 'stroke']) {
    const attributeNames = _.map(element.attributes, 'nodeName').filter((attributeName) => {
        return attributes.indexOf(attributeName) > -1;
    });

    attributeNames.forEach((attributeName) => {
        const existingValue = element.getAttribute(attributeName);
        if (!_.includes(['none'], existingValue)) {
            element.setAttribute(attributeName, value);
        }
    });

    if (element.children && element.children.length) {
        Array.prototype.forEach.call(element.children, (element) => {
            setElementColorAttributeValue(element, value);
        });
    }
}

module.exports = setElementColorAttributeValue;
