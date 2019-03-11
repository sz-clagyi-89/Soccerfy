import { PlayerModel } from './player.model';

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
    private matches: number;
    public players: PlayerModel[] = [];

    constructor(logo: string, name: string, leauge: string, headCoach: string, image: string,
                victory = 0, loss = 0, draw = 0, players: PlayerModel[]) {
                    this.logo = logo;
                    this.name = name;
                    this.leauge = leauge;
                    this.headCoach = headCoach;
                    this.imagePath = image;
                    this.victory = victory;
                    this.loss = loss;
                    this.draw = draw;
                    this.matches = this.victory + this.loss + this.draw;
                    this.players = players;

    }

    public countStrength(): number {
        if (this.draw !== 0) {
            this.strength = ((this.victory + (0.5 * this.draw)) / this.matches) * 100;
            return this.strength;
        } else if (this.matches === 0) {
            this.strength = 0;
            return this.strength;
        } else {
            this.strength = (this.victory / this.matches) * 100;
            return this.strength;
        }
    }
}

