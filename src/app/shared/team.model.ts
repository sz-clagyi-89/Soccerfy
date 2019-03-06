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
    private pureEnding: number;

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
                    this.pureEnding = this.victory + this.loss;

    }

    // public getStrength() {
    //     return this.strength;
    // }

    // public countStrength(): void {
    //     if (this.draw !== 0) {
    //         const pureEndingPerform = (this.victory / this.pureEnding) * 100;
    //         this.strength = ((this.draw * 50) + pureEndingPerform) / (this.draw + 1);
    //         // console.log(this.strength);
    //         // return this.strength;
    //     } else if (this.pureEnding === 0 && this.draw === 0) {
    //         this.strength = 0;
    //         // console.log(this.strength);
    //         // return this.strength;
    //     } else {
    //         this.strength = (this.victory / this.pureEnding) * 100;
    //         // console.log(this.strength);
    //         // return this.strength;
    //     }
    // }
}

