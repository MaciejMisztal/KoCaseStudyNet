var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "knockout", "mko-custom", "breeze", "knockout.mapping"], function (require, exports, ko, mko_custom_1, breeze) {
    "use strict";
    var templateUrl = "text!/app/component/page-breeze/page-breeze.html";
    var PageBreeze = (function () {
        function PageBreeze(params) {
            //(<any>window).ko = ko;
            //breeze.config.initializeAdapterInstance('modelLibrary', 'ko', true);
            var _this = this;
            this.click = function (data, parent) {
                console.log(parent);
            };
            this.del = function (data) {
                console.log(data);
                data.entityAspect.setDeleted();
            };
            this.getAllLevels = function () {
                breeze.EntityQuery
                    .from("Levels").expand("LevelTwos")
                    .using(_this.eMgr)
                    .execute()
                    .then(function (dt) {
                    //this.store.fetchMetadata("/breeze/NestedBreeze");
                    //this.store.getEntityType("LevelTwos");
                    _this.items(dt.results);
                    //ko.mapping.fromJS(dt.results, {}, this.items);
                    console.log("done"); //;ko.toJSON(this.items));
                    //console.log(this.eMgr.getEntities())
                    _this.isLoaded(true);
                    console.log("here: " + dt.results.length);
                }).catch(function (err) { "Problem:" + alert(err.message); });
            };
            this.saveChanges = function () {
                _this.validationErrors([]);
                console.log("saving");
                _this.eMgr.saveChanges()
                    .then(function (sr) { alert("Saved " + sr.entities.length + " item(s)"); })
                    .catch(_this.saveFailed);
            };
            this.saveFailed = function (error) {
                console.log("Save failed");
                error.entityErrors.map(function (entityError) { return _this.validationErrors.push(entityError); });
            };
            this.getPropertyError = function (propertyName) {
                console.log('propertyName=' + propertyName);
                var validationErrors = ko.utils.arrayFilter(_this.validationErrors(), function (validationError) {
                    return validationError.propertyName == propertyName;
                });
                if (validationErrors.length)
                    return validationErrors[0].errorMessage;
                else
                    return '';
            };
            this.isLoaded = ko.observable(false);
            this.items = ko.observableArray();
            this.eMgr = new breeze.EntityManager("/breeze/NestedBreeze");
            //this.store = new breeze.MetadataStore();
            this.validationErrors = ko.observableArray();
            console.log('PageBreeze.constructor');
            console.log('params=' + JSON.stringify(ko.toJSON(params)));
            this.getAllLevels();
        }
        ;
        PageBreeze = __decorate([
            mko_custom_1.mkoCustomTemplateLoader('page-breeze', templateUrl), 
            __metadata('design:paramtypes', [Object])
        ], PageBreeze);
        return PageBreeze;
    }());
    exports.PageBreeze = PageBreeze;
    ;
});
//# sourceMappingURL=page-breeze.js.map