export class TeamModel {
    public logo: string;
    public name: string;
    public leauge: string;
    public headCoach: string;
    public imagePath: string;
    public strength: number;
    public victory: number;
    public loss: number;
    public draw: number;

    constructor(logo: string, name: string, leauge: string, headCoach: string, image: string,
                strength = 50, victory = 0, loss = 0, draw = 0) {
                    this.logo = logo;
                    this.name = name;
                    this.leauge = leauge;
                    this.headCoach = headCoach;
                    this.imagePath = image;
                    this.strength = strength;
                    this.victory = victory;
                    this.loss = loss;
                    this.draw = draw;
    }
}
