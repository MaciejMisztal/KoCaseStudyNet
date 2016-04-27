declare module "mko-custom" {
    /**
    * Decorator: Indicates that the decorated class will be a custom element.
    * @param selectorName The name of the custom element.
    * @param templateContet Content (html) of element.
    */
    export function mkoCustom(selectorName: string, templateContet: string): (target: Function) => void;
    /**
    * Decorator: Indicates that the decorated class will be a custom element.
    * @param selectorName The name of the custom element.
    * @param templateUrl URL location of template.
    */
    export function mkoCustomTemplateLoader(selectorName: string, templateUrl: string): (target: Function) => void;
}