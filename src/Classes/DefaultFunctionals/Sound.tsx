import { Functional } from "../Functional";

export class Sound extends Functional {
    private sound: string[];
    constructor(x: string, y: string) {
        const sound = [x,y]
        super("sound",new Sound(x,y))
        this.sound = sound
        
    }
}