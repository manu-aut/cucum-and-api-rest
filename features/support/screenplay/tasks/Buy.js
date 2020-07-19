"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buy = void 0;
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var interactions_1 = require("../interactions");
var ui_1 = require("../ui");
var personalInformation;
exports.Buy = {
    theProduct: function (dataTablePersonals) {
        dataTablePersonals.forEach(function (value) {
            personalInformation = value;
        });
        return core_1.Task.where("#actor makes the purchase", interactions_1.CloseAlert.ofBrowser('Product added'), protractor_1.Click.on(ui_1.ShoppingCard.button_menu_cart), protractor_1.Wait.until(ui_1.ShoppingCard.list_of_products, protractor_1.isVisible()), protractor_1.Click.on(ui_1.ShoppingCard.button_place_order), protractor_1.Wait.until(ui_1.ShoppingCard.modal_form_place_order, protractor_1.isVisible()), protractor_1.Enter.theValue(personalInformation['name']).into(ui_1.ShoppingCard.input_name), protractor_1.Enter.theValue(personalInformation['country']).into(ui_1.ShoppingCard.input_country), protractor_1.Enter.theValue(personalInformation['city']).into(ui_1.ShoppingCard.input_city), protractor_1.Enter.theValue(personalInformation['credit card']).into(ui_1.ShoppingCard.input_number_credit_cart), protractor_1.Enter.theValue(personalInformation['month']).into(ui_1.ShoppingCard.input_month), protractor_1.Enter.theValue(personalInformation['year']).into(ui_1.ShoppingCard.input_year), protractor_1.Click.on(ui_1.ShoppingCard.button_purchase));
    }
};
//# sourceMappingURL=Buy.js.map