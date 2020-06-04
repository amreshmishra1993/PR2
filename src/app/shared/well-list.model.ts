export class ListModel {
    public name:string
    public type:string
    public sourceKey:number
    constructor( name:string, type:string, sourceKey:number){
        this.name = name
        this.type = type
        this.sourceKey=sourceKey
    }
}