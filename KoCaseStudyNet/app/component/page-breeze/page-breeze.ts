import * as ko from "knockout";
import "knockout.mapping";
import "knockout-projections";
import {mkoCustomTemplateLoader} from "mko-custom";
import * as breeze from "breeze";

let templateUrl = "text!/app/component/page-breeze/page-breeze.html";


@mkoCustomTemplateLoader('page-breeze', templateUrl)
export class PageBreeze {
    public eMgr;
    public items;
    public itemsNotDeleted;
    //public store: breeze.MetadataStore;
    public isLoaded;
    public validationErrors: KnockoutObservableArray<any>;

    constructor(params) {
        //(<any>window).ko = ko;
        //breeze.config.initializeAdapterInstance('modelLibrary', 'ko', true);
        ko.options.deferUpdates = false;

        this.isLoaded = ko.observable(false);
        this.items = ko.observableArray([]);              
        this.eMgr = new breeze.EntityManager("/breeze/NestedBreeze");

        this.validationErrors = ko.observableArray();
        console.log('PageBreeze.constructor');
        console.log('params=' + JSON.stringify(ko.toJSON(params)));
        this.getAllLevels();
    };

    click = (data, parent) => {
        console.log(parent);
        console.log(data);
        data.remove(parent);
    };
    del = (data) => {
        console.log(data);
        data['isDeleted'] = ko.observable(true);
        data.entityAspect.setDeleted();
        this.items.valueHasMutated();
        console.log('deleted');
    }

    isNotDeleted = (item) => {
        return item.entityAspect.entityState !== "Deleted"
    };

    isNotDeleted2 = (data, parent) => {
        return data.entityAspect.entityState !== breeze.EntityState.Deleted;
    };

    isNotDeletedF = (data) => {
        return data.entityAspect.entityState !== breeze.EntityState.Deleted;
    };

    private getAllLevels = () => {
        breeze.EntityQuery
            .from("Levels").expand("LevelTwos")
            .using(this.eMgr)
            .execute()
            .then(dt => {
                this.items(dt.results);
                console.log("done");
                this.isLoaded(true);
                console.log("here: " + dt.results.length)
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
