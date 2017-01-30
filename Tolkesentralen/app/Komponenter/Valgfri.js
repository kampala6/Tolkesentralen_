"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Denne klassen er praktisk vis man trenger å bruke samme komponent flere ganger. (child.ts)
var core_1 = require("@angular/core");
var Valgfri = (function () {
    function Valgfri() {
    }
    Valgfri.prototype.ngOnInit = function () { };
    Valgfri = __decorate([
        core_1.Component({
            selector: "valgfri",
            styles: ["label {color:darkorange;}"],
            template: "<p>Masse muligheter her<p>"
        }), 
        __metadata('design:paramtypes', [])
    ], Valgfri);
    return Valgfri;
}());
exports.Valgfri = Valgfri;
//# sourceMappingURL=Valgfri.js.map