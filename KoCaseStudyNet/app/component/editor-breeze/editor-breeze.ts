import * as ko from "knockout";
import {mkoCustomTemplateLoader} from "mko-custom";
import * as breeze from "breeze";
import {BreezeValidated} from "../../base/breeze-validated";


@mkoCustomTemplateLoader(
    'editor-breeze',
    "text!/app/component/editor-breeze/editor-breeze.html")
export class EditorBreeze extends BreezeValidated {
    item;
    isDeleted;
    hasError;
    constructor(params) {
        super();
        this.item = params.element;
        this.isDeleted = ko.observable(false);
        this.hasError = ko.observable(false);
        this.item.entityAspect.validationErrorsChanged.subscribe(this.handleValidationErrorChanged);
        console.log('editor-breeze');
    };

    handleValidationErrorChanged = () => {
        this.hasError(this.item.entityAspect.hasValidationErrors);
        this.item.valueHasMutated();
    };

    del = (data) => {
        console.log(data);
        data.item.entityAspect.setDeleted();
        this.isDeleted(true)
        console.log('deleted');
    }

    isNotDeleted = (item) => {
        return item.item.entityAspect.entityState !== "Deleted"
    };

    getPropertyErr2 = (data: breeze.Entity, propertyName: string) => {
        console.log('propertyName=' + propertyName);
        let validationErrors = ko.utils.arrayFilter(data.entityAspect.getValidationErrors(), (validationError) => {
            return validationError.propertyName == propertyName;
        });
        if (validationErrors.length)
            return validationErrors[0].errorMessage;
        else
            return '';
    };
};
