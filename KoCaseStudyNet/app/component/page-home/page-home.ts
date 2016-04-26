import * as ko from "knockout";
import {mkoCustomTemplateLoader} from "mko-custom";
let templateUrl ="text!/app/component/page-home/page-home.html";


@mkoCustomTemplateLoader('page-home', templateUrl)
export class PageHome {

    constructor(params) {
        console.log('page-home');
        console.log('params='+JSON.stringify(ko.toJSON(params)));
    };
};
