"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var core_1 = require("@serenity-js/core");
var screenplay_1 = require("../support/screenplay");
var protractor_1 = require("@serenity-js/protractor");
var assertions_1 = require("@serenity-js/assertions");
cucumber_1.Given(/(?:he|she|they) (?:adds?) the cheapest cell phone to the car most (.*)/, function (actorName, priceRange) {
    return core_1.actorCalled(actorName).attemptsTo(protractor_1.UseAngular.disableSynchronisation(), screenplay_1.Select.theProduct(priceRange));
});
cucumber_1.When(/enter personal data/, function (personalInformation) {
    return core_1.actorInTheSpotlight().attemptsTo(screenplay_1.Buy.theProduct(personalInformation.hashes()));
});
cucumber_1.Then(/he would visualize a modal that has the message: (.*)/, function (message) {
    return core_1.actorInTheSpotlight().attemptsTo(assertions_1.Ensure.that(screenplay_1.PurchaseMessage(), assertions_1.equals(message)));
});
//# sourceMappingURL=buy_products_d_one.js.map