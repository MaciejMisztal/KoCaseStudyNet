import * as ko from "knockout";
import  "knockout.mapping";
import {mkoCustomTemplateLoader} from "mko-custom";
import * as breeze from "breeze";

let templateUrl = "text!/app/component/page-breeze/page-breeze.html";


@mkoCustomTemplateLoader('page-breeze', templateUrl)
export class PageBreeze {
    public eMgr;
    public items;
    public store: breeze.MetadataStore;
    public isLoaded;
    public validationErrors: KnockoutObservableArray<any>;

    constructor(params) {
        //(<any>window).ko = ko;
        //breeze.config.initializeAdapterInstance('modelLibrary', 'ko', true);

        this.isLoaded = ko.observable(false);
        this.items = ko.observableArray();
        this.eMgr = new breeze.EntityManager("/breeze/NestedBreeze");
        //this.store = new breeze.MetadataStore();

        this.validationErrors = ko.observableArray();
        console.log('PageBreeze.constructor');
        console.log('params=' + JSON.stringify(ko.toJSON(params)));
        this.getAllLevels();
    };

    click = (data, parent) => {
        console.log(parent);
    };
    del = (data) => {
        console.log(data);
        data.entityAspect.setDeleted();  
    }

    private getAllLevels = () => {
        breeze.EntityQuery
            .from("Levels").expand("LevelTwos")
            .using(this.eMgr)
            .execute()
            .then(dt => {
                //this.store.fetchMetadata("/breeze/NestedBreeze");
                //this.store.getEntityType("LevelTwos");
                this.items(dt.results);
                //ko.mapping.fromJS(dt.results, {}, this.items);
                console.log("done");//;ko.toJSON(this.items));
                //console.log(this.eMgr.getEntities())
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
