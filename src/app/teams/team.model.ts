export class TeamModel {
    public imagePath: string
    public name: string
    public leauge: string
    public strength: number
    public victory: number
    public loss: number
    public draw: number

    constructor(image:string, name: string, leauge: string,
                strength = 50, victory = 0, loss = 0, draw = 0) {
                    this.imagePath = image;
                    this.name = name;
                    this.leauge = leauge;
                    this.strength = strength;
                    this.victory = victory;
                    this.loss = loss;
                    this.draw = draw;
    }
}
