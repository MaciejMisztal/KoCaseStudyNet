import * as ko from "knockout";
import * as breeze from "breeze";

export class BreezeValidated {
    getObjectPropertyError = (data: breeze.Entity, propertyName: string) => {
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