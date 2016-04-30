var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "page", "knockout", "mko-custom", "./mui-init", "knockout.punches", "css!./mui-layout.css", "../mui-nav/mui-nav", "../page-home/page-home", "../page-kovalidation-remote/page-kovalidation-remote", "../page-breeze/page-breeze"], function (require, exports, page, ko, mko_custom_1, mui_init_1) {
    "use strict";
    var templateUrl = "text!/app/component/mui-layout/mui-layout.html";
    var MuiLayout = (function () {
        function MuiLayout(params) {
            var _this = this;
            this.itemList = ko.observableArray();
            this.state = ko.observable("init");
            this.router = ko.observable({ name: ko.observable(""), params: {} });
            this.routerSetup = function () {
                _this.routingProvider = page;
                _this.baseUrl = '/';
                _this.routingProvider.base(_this.baseUrl.replace(/\/$/, ''));
                _this.routingProvider('/', function () {
                    return _this.router().name("page-home");
                });
                _this.routingProvider('/kovalidationremote', function () {
                    return _this.router().name("page-kovalidation-remote");
                });
                _this.routingProvider('/pagebreeze', function () {
                    return _this.router().name("page-breeze");
                });
                _this.routingProvider('*', function () { return _this.router().name("page-home"); });
                _this.routingProvider({ hashbang: true });
            };
            ko.punches.enableAll();
            this.routerSetup();
            console.log("routingProvider.current=" + this.routingProvider.current);
            setTimeout(function () {
                mui_init_1.muiInit();
            }, 0);
        }
        MuiLayout = __decorate([
            mko_custom_1.mkoCustomTemplateLoader('mui-layout', templateUrl), 
            __metadata('design:paramtypes', [Object])
        ], MuiLayout);
        return MuiLayout;
    }());
    exports.MuiLayout = MuiLayout;
});
//# sourceMappingURL=mui-layout.js.map