export class TeamModel {
    public logo: string;
    public name: string;
    public leauge: string;
    public headCoach: string;
    public imagePath: string;
    private strength: number;
    public victory: number;
    public loss: number;
    public draw: number;
    private matches: number;

    constructor(logo: string, name: string, leauge: string, headCoach: string, image: string,
                victory = 0, loss = 0, draw = 0) {
                    this.logo = logo;
                    this.name = name;
                    this.leauge = leauge;
                    this.headCoach = headCoach;
                    this.imagePath = image;
                    this.victory = victory;
                    this.loss = loss;
                    this.draw = draw;
                    this.matches = this.victory + this.loss;

    }

    countStrength() {
        this.strength = (this.victory / this.matches) * 100;
        return this.strength;
    }
}
