"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actors = void 0;
var core_1 = require("@serenity-js/core");
var protractor_1 = require("@serenity-js/protractor");
var ptor_1 = require("protractor/built/ptor");
var Actors = /** @class */ (function () {
    function Actors() {
    }
    Actors.prototype.prepare = function (actor) {
        return actor.whoCan(protractor_1.BrowseTheWeb.using(ptor_1.protractor.browser), core_1.TakeNotes.usingAnEmptyNotepad());
    };
    return Actors;
}());
exports.Actors = Actors;
//# sourceMappingURL=Actors.js.map