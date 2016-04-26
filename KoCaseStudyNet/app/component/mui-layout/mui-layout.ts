import * as page from "page";
import * as ko from "knockout";
import "knockout.punches";
import {mkoCustomTemplateLoader} from "mko-custom";
import "css!./mui-layout.css";
import "../mui-nav/mui-nav";
import "../page-home/page-home";
import "../page-kovalidation-remote/page-kovalidation-remote";
import "../page-breeze/page-breeze";
import {muiInit} from "./mui-init";

let templateUrl = "text!/app/component/mui-layout/mui-layout.html";


@mkoCustomTemplateLoader('mui-layout', templateUrl)
export class MuiLayout {
    itemList = ko.observableArray();
    routingProvider;
    baseUrl;
    state=ko.observable("init");
    router = ko.observable({ name: ko.observable(""), params:{} } );

    constructor(params) {
        ko.punches.enableAll();
        this.routerSetup();
        console.log("routingProvider.current="+this.routingProvider.current);
        setTimeout(function() {
            muiInit(); 
        }, 0);
    }

    routerSetup = () => {
        this.routingProvider = page;
        this.baseUrl = '/';
        this.routingProvider.base(this.baseUrl.replace(/\/$/, ''));

        this.routingProvider('/', () => 
            this.router().name("page-home")
        );


        this.routingProvider('/kovalidationremote', () => 
            this.router().name("page-kovalidation-remote")
        );

        this.routingProvider('/pagebreeze', () =>
            this.router().name("page-breeze")
        );

        this.routingProvider('*', () =>  this.router().name("page-home"));
        this.routingProvider({hashbang: true});
    }
}