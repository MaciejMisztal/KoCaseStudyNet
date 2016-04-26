import * as ko from "knockout";
import {mkoCustomTemplateLoader} from "mko-custom";
let templateUrl = "text!/app/component/mui-nav/mui-nav.html";

@mkoCustomTemplateLoader('mui-nav', templateUrl)
export class MuiNav {

    constructor(params) {
        console.log('params='+JSON.stringify(ko.toJSON(params)));
    };
};
