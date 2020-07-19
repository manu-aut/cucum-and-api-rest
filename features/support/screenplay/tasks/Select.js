"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var ui_1 = require("../ui");
var interactions_1 = require("../interactions");
var assertions_1 = require("@serenity-js/assertions");
exports.Select = {
    theProduct: function (priceRange) {
        return core_1.Task.where("#actor select the cheapeast product", protractor_1.Click.on(ui_1.Home.categories), protractor_1.Wait.for(core_1.Duration.ofMilliseconds(3000)), protractor_1.Wait.until(ui_1.Home.listProduct, protractor_1.isVisible()), interactions_1.Filter.theProduct(ui_1.Home.phonesCard, priceRange), assertions_1.Check.whether(ui_1.Home.buttonPlaceOrder, protractor_1.isClickable()).andIfSo(protractor_1.Click.on(ui_1.Home.buttonPlaceOrder)));
    }
};
//# sourceMappingURL=Select.js.map