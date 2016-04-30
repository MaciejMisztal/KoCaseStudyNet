var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "knockout", "mko-custom", "knockout.validation", "./rules"], function (require, exports, ko, mko_custom_1) {
    "use strict";
    var PageKovalidationRemote = (function () {
        function PageKovalidationRemote(params) {
            var _this = this;
            this.valueByIdUser = ko.pureComputed(function () {
                return {
                    idUser: _this.idUser,
                    value: _this.value
                };
            }).extend({ correctValueByIdUser: true });
            this.hasError = function () {
                return _this.errors().length > 0;
            };
            this.showErrors = function () {
                _this.errors.showAllMessages();
            };
            this.removeErrors = function () {
                _this.errors.showAllMessages(false);
            };
            this.create = function () {
                _this.removeErrors();
                if (_this.hasError()) {
                    _this.showErrors();
                    return;
                }
                alert('No error found');
            };
            this.reset = function () {
                _this.idUser(0);
                _this.value(0);
                _this.removeErrors();
            };
            console.log('page-kovalidation-remote');
            this.idUser = ko.observable(0).extend({ required: true, correctIdUser: true });
            this.value = ko.observable(0).extend({ required: true, });
            this.errors = ko.validation.group([this.idUser, this.value]);
            ko.validation.init();
            this.removeErrors();
        }
        ;
        PageKovalidationRemote = __decorate([
            mko_custom_1.mkoCustomTemplateLoader('page-kovalidation-remote', "text!/app/component/page-kovalidation-remote/page-kovalidation-remote.html"), 
            __metadata('design:paramtypes', [Object])
        ], PageKovalidationRemote);
        return PageKovalidationRemote;
    }());
    exports.PageKovalidationRemote = PageKovalidationRemote;
});
//# sourceMappingURL=page-kovalidation-remote.js.map