import * as ko from "knockout";
import "knockout.validation";
import "./rules";
import {mkoCustomTemplateLoader} from "mko-custom";

@mkoCustomTemplateLoader(
    'page-kovalidation-remote',
    "text!/app/component/page-kovalidation-remote/page-kovalidation-remote.html"
)
export class PageKovalidationRemote {
    idUser: KnockoutObservable<number>;
    value: KnockoutObservable<number>;
    errors;
    constructor(params) {
        console.log('page-kovalidation-remote');
        this.idUser = ko.observable(0).extend({ required: true, correctIdUser: true });
        this.value = ko.observable(0).extend({ required: true,  });
        this.errors = ko.validation.group([this.idUser, this.value]);
        ko.validation.init();
        this.removeErrors();
    };

    valueByIdUser = ko.pureComputed(() => {
        return {
            idUser: this.idUser,
            value: this.value
        }
    }).extend({ correctValueByIdUser: true });
    
    hasError = () => {
        return this.errors().length > 0;
    };
    showErrors = () => {
        this.errors.showAllMessages();
    };

    removeErrors = () => {
        this.errors.showAllMessages(false);
    };

    create = () => {
        this.removeErrors();
        if (this.hasError()) {
            this.showErrors();
            return;
        }
        alert('No error found');
    };

    reset = () => {
        this.idUser(0);
        this.value(0);
        this.removeErrors();
    };
}