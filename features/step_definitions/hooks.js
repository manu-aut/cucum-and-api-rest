"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var core_1 = require("@serenity-js/core");
var screenplay_1 = require("../support/screenplay");
var protractor_1 = require("protractor");
cucumber_1.Before(function () {
    core_1.engage(new screenplay_1.Actors());
    cucumber_1.setDefaultTimeout(60 * 1000);
    protractor_1.browser.get(protractor_1.browser.baseUrl);
});
//# sourceMappingURL=hooks.js.map