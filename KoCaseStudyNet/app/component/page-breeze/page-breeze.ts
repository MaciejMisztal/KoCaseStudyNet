import * as ko from "knockout";
import {mkoCustomTemplateLoader} from "mko-custom";
import * as breeze from "breeze";

let templateUrl = "text!/app/component/page-breeze/page-breeze.html";


@mkoCustomTemplateLoader('page-breeze', templateUrl)
export class PageBreeze {
    public eMgr;
    public items;
    public store;
    public validationErrors: KnockoutObservableArray<any>;

    constructor(params) {
        this.items = ko.observableArray();
        this.eMgr = new breeze.EntityManager("/breeze/NestedBreeze");
        this.validationErrors = ko.observableArray();
        console.log('PageBreeze.constructor');
        console.log('params=' + JSON.stringify(ko.toJSON(params)));
        this.getAllLevels();
    };

    private getAllLevels = () => {
        breeze.EntityQuery
            .from("Levels")
            .using(this.eMgr)
            .execute()
            .then(dt => {
                this.items(dt.results);
            }).catch(err => { "Problem:" + alert(err.message); });
    }
    private saveChanges = () => {
        this.validationErrors([]);
        console.log("saving");
        this.eMgr.saveChanges()
            .then(sr => { alert("Saved " + sr.entities.length + " item(s)") })
            .catch(this.saveFailed);
    };

    private saveFailed = (error) => {
        console.log("Save failed");
        error.entityErrors.map(
            (entityError) => this.validationErrors.push(entityError)
        );
    }

    private getPropertyError = (propertyName) => {
        console.log('propertyName=' + propertyName);
        let validationErrors = ko.utils.arrayFilter(this.validationErrors(), (validationError) => {
            return validationError.propertyName == propertyName;
        });
        if (validationErrors.length)
            return validationErrors[0].errorMessage;
        else
            return '';
	};
};
