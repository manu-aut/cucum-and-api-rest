"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var core_1 = require("@serenity-js/core");
var higherValue = -10000;
var lowerValue = 10000;
var productValue;
exports.Filter = {
    theProduct: function (target, priceRange) {
        return core_1.Interaction.where("#actor looks for the cheapest product " + priceRange, function (actor) {
            return target.answeredBy(actor).filter(function (element) {
                getValue(actor, target, priceRange);
                return element.$('h5').getText().then(function (text) {
                    productValue = Number(text.replace('$', ''));
                    if (priceRange === 'cheapest') {
                        return lowerValue === productValue;
                    }
                    else {
                        return higherValue === productValue;
                    }
                });
            }).first().$('.card-title').click();
        });
    }
};
var getValue = function (actor, target, priceRange) {
    target.answeredBy(actor).each(function (element) {
        element.$('h5').getText().then(function (text) {
            productValue = Number(text.replace('$', ''));
            switch (priceRange) {
                case 'cheapest': {
                    if (productValue < lowerValue) {
                        lowerValue = productValue;
                    }
                    break;
                }
                case 'expensive': {
                    if (productValue < lowerValue) {
                        higherValue = productValue;
                    }
                    break;
                }
                default: {
                    throw new Error('the value sent is not correct, please valite that is in the range');
                }
            }
        });
    });
};
//# sourceMappingURL=Filter.js.map