define(["require", "exports"], function (require, exports) {
    "use strict";
    var BreezeVaidated = (function () {
        function BreezeVaidated() {
            this.getObjectPropertyError = function (data, propertyName) {
                console.log('propertyName=' + propertyName);
                var validationErrors = ko.utils.arrayFilter(data.entityAspect.getValidationErrors(), function (validationError) {
                    return validationError.propertyName == propertyName;
                });
                if (validationErrors.length)
                    return validationErrors[0].errorMessage;
                else
                    return '';
            };
        }
        return BreezeVaidated;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BreezeVaidated;
    ;
});
//# sourceMappingURL=breeze-valedated.js.map