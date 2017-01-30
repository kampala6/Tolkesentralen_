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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
require("rxjs/add/operator/map");
var SPA = (function () {
    function SPA(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.skjemaS2 = fb.group({
            personnr: ["", forms_1.Validators.pattern("[0-9]{11}")],
            email: ["", forms_1.Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            tlf: ["", forms_1.Validators.pattern("[0-9]{8,12}")],
            test: [""]
        });
        this.skjemaS3 = fb.group({
            fornavn: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            etternavn: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            adresse: ["", forms_1.Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            postnr: ["", forms_1.Validators.pattern("[0-9]{4}")],
            poststed: ["", forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
    }
    SPA.prototype.ngOnInit = function () {
        this.divBook = true;
        this.navbar = true;
    };
    SPA = __decorate([
        core_1.Component({
            selector: "min-app",
            templateUrl: "./app/SPA.html",
            styles: ["label, th {color:darkorange; "],
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], SPA);
    return SPA;
}());
exports.SPA = SPA;
//# sourceMappingURL=SPA.js.map