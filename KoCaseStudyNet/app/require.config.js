/// <reference path="../bower_modules/knockout-projections/dist/knockout-projections.min.js" />
/// <reference path="../bower_modules/bower-knockout-mapping/dist/knockout.mapping.min.js" />
var require = {
    baseUrl: "../",
    paths: {
        "text": "bower_modules/requirejs-text/text",
        "knockout": "Scripts/knockout-3.4.0.debug",
        "breeze": "bower_modules/breeze-client/build/breeze.debug",
        "Q": "Scripts/q.min",
        "jquery": "Scripts/jquery-2.2.3.min",
        "mko-custom": "bower_modules/mko-custom/src/mko-custom",
        "mui": "bower_modules/mui/packages/cdn/js/mui.min",
        "muicss": "bower_modules/mui/packages/cdn/css/mui.min",
        "knockout.punches": "Scripts/knockout.punches",
        "page": "bower_modules/page/page",
        "knockout.validation": "Scripts/knockout.validation",
        "knockout.mapping": "bower_modules/bower-knockout-mapping/dist/knockout.mapping.min",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections.min"
    },
    map: {
        '*': {
            'css': 'bower_modules/require-css/css'
        }
    },
    shim: {
        "breeze": ["Q", "jquery"],
        "mui": ["jquery"]
    }
};