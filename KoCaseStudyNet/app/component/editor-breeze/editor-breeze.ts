import * as ko from "knockout";
import EditorBreezeModel from "./editor-breeze-model";
import {mkoCustomTemplateLoader} from "mko-custom";
let templateUrl = "text!/app/component/editor-breeze/editor-breeze.html";
import * as breeze from "breeze";
import {BreezeValidated} from "../../base/breeze-validated";


@mkoCustomTemplateLoader('editor-breeze', templateUrl)
export class EditorBreeze extends BreezeValidated {
    item;
    isDeleted;
    constructor(params) {
        super();
        this.item = params.element;
        this.isDeleted = ko.observable(false);
        console.log('editor-breeze');
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
