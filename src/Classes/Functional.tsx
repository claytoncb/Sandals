import { Node } from "./Node";
export class Functional extends Node {
    application?: any;
    constructor(id: string, theFunction?: any) {
        super(id)
        this.application = theFunction
    }
}