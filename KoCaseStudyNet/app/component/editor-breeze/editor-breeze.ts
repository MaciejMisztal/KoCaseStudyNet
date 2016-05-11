import * as ko from "knockout";
import EditorBreezeModel from "./editor-breeze-model";
import {mkoCustomTemplateLoader} from "mko-custom";
let templateUrl = "text!/app/component/editor-breeze/editor-breeze.html";
import * as breeze from "breeze";

@mkoCustomTemplateLoader('editor-breeze', templateUrl)
export class EditorBreeze {
    item;
    isDeleted;
    constructor(params) {
        this.item = params.element;
        this.isDeleted = ko.observable(false);
        console.log('editor-breeze');
    };


    click = (data, parent) => {
        console.log('parent=' + parent);
        console.log('data=' + data);
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

    isNotDeleted2 = (data, parent) => {
        return data.item.entityAspect.entityState !== breeze.EntityState.Deleted;
    };


};
