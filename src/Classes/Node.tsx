import { Functional } from "./Functional"

export class Node {
    id: string
    functs: Functional[] = []
    radius: number
    children: Node[] = []
    constructor(id:string,radius?:number){
        this.id = id
        this.radius = radius?radius:0
    }
    addChild(child:Node){if (this.children.filter(child1=>child.id===child1.id).length === 0) {this.children.push(child); return true} return false}
    addFunct(funct:Functional){if (this.functs.filter(funct1=>funct.id===funct1.id).length === 0) {this.functs.push(funct); return true} return false}
    renderer=()=>{return(<div>{'id:'+this.id+', functionals:'+this.functs.map(funct=>{funct.renderer()})}{this.children.map(child=>child.renderer())}</div>)}
}