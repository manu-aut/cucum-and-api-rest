"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var protractor_1 = require("@serenity-js/protractor");
var protractor_2 = require("protractor");
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.categories = protractor_1.Target.the('button phones').located(protractor_2.by.cssContainingText('#itemc', 'Phones'));
    Home.phonesCard = protractor_1.Target.all('Card phones in the home').located(protractor_2.by.css('.card-block'));
    Home.buttonPlaceOrder = protractor_1.Target.the('add to car select product').located(protractor_2.by.cssContainingText('btn-success', 'Add to cart'));
    Home.listProduct = protractor_1.Target.the('information products ').located(protractor_2.by.className('.hvcbn > #dkkdj'));
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=Home.js.map