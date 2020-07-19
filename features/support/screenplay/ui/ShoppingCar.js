"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCard = void 0;
var protractor_1 = require("protractor");
var protractor_2 = require("@serenity-js/protractor");
var ShoppingCard = /** @class */ (function () {
    function ShoppingCard() {
    }
    ShoppingCard.button_menu_cart = protractor_2.Target.the('button ').located(protractor_1.by.cssContainingText('.nav-link', 'Cart'));
    ShoppingCard.button_place_order = protractor_2.Target.the('button').located(protractor_1.by.cssContainingText('.btn-success', 'Place Order'));
    ShoppingCard.input_name = protractor_2.Target.the('enter name').located(protractor_1.by.id('name'));
    ShoppingCard.input_country = protractor_2.Target.the('enter country').located(protractor_1.by.id('country'));
    ShoppingCard.input_city = protractor_2.Target.the('enter city').located(protractor_1.by.id('city'));
    ShoppingCard.input_number_credit_cart = protractor_2.Target.the('enter number credit Card').located(protractor_1.by.id('card'));
    ShoppingCard.input_month = protractor_2.Target.the('enter month').located(protractor_1.by.id('month'));
    ShoppingCard.input_year = protractor_2.Target.the('enter year').located(protractor_1.by.id('year'));
    ShoppingCard.button_purchase = protractor_2.Target.the('enter purchase proccess').located(protractor_1.by.cssContainingText('.btn-primary', 'Purchase'));
    ShoppingCard.confirmation_message_label = protractor_2.Target.the('view modal message').located(protractor_1.by.xpath('//div[contains(@class,"sweet-alert")]/h2'));
    ShoppingCard.list_of_products = protractor_2.Target.the('list of products').located(protractor_1.by.css('.success'));
    ShoppingCard.modal_form_place_order = protractor_2.Target.the('modal information').located(protractor_1.by.xpath('//div[@id="orderModal" and containts(text(),"{0}")]'));
    return ShoppingCard;
}());
exports.ShoppingCard = ShoppingCard;
//# sourceMappingURL=ShoppingCar.js.map