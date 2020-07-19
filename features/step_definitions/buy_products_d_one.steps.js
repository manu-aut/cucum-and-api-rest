

var lib_cucumber = require('cucumber');
var sjs_core = require('@serenity-js/core');
var sjs_assert = require('@serenity-js/assertions');
var dir_screenplay = require('../support/screenplay');


lib_cucumber.Given(/(?:he|she|they) (?:adds?) the cheapest cell phone to the car most (.*)/, function (actorName, priceRange) {
    return sjs_core.actorCalled(actorName).attemptsTo(dir_screenplay.Select.theProduct(priceRange));
});


lib_cucumber.When(/enter personal data/, function (personalInformation) {
    return sjs_core.actorInTheSpotlight().attemptsTo(dir_screenplay.Buy.theProduct(personalInformation.hashes()));
});

lib_cucumber.Then(/he would visualize a modal that has the message: (.*)/, function (message) {
    return sjs_core.actorInTheSpotlight().attemptsTo(sjs_assert.Ensure.that(dir_screenplay.PurchaseMessage(), sjs_assert.equals(message)));

});





