"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseAlert = void 0;
var assertions_1 = require("@serenity-js/assertions");
var core_1 = require("@serenity-js/core");
var protractor_1 = require("protractor");
var questions_1 = require("../questions");
exports.CloseAlert = {
    ofBrowser: function (alertText) {
        return core_1.Interaction.where("#actor close windows alert browser", function (actor) {
            return protractor_1.browser.sleep(3000).then(function () {
                protractor_1.browser.wait(protractor_1.ExpectedConditions.alertIsPresent(), 5000).then(function () {
                    actor.attemptsTo(assertions_1.Ensure.that(questions_1.AlertText.isVisible(), assertions_1.equals(alertText)));
                    protractor_1.browser.switchTo().alert().accept();
                });
            });
        });
    }
};
//# sourceMappingURL=CloseAlert.js.map