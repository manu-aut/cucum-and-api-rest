"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseMessage = void 0;
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var ui_1 = require("../ui");
exports.PurchaseMessage = function () {
    return core_1.Question.about("displays the purchase notificatios", function (actor) {
        return protractor_1.Text.of(ui_1.ShoppingCard.confirmation_message_label).answeredBy(actor);
    });
};
//# sourceMappingURL=PurchaseMessage.js.map