export class PlayerModel {
    public name: string;
    public age: number;
    public nationality: string;
    public teams: string[];
    public position: string;
    public imagePath: string;
    public attack: number;
    public middle: number;
    public defense: number;
    public goals: number;
    public assistance: number;
    public strength: number;
    public id = Math.ceil(Math.random() * 1000000000000000).toString(24);

    constructor(img: string, name: string, age: number, nat: string, position: string, teams = ['Has no team yet'],
                att = 0, mid = 0, def = 0,
                goals = 0, ass = 0, strength = 100) {
        this.imagePath = img;
        this.name = name;
        this.age = age;
        this.nationality = nat;
        this.position = position;
        this.teams = teams;
        this.attack = att;
        this.middle = mid;
        this.defense = def;
        this.goals = goals;
        this.assistance = ass;
        this.strength = strength;
    }

    static getID(): string {
        return Math.ceil(Math.random() * 1000000000000000).toString(24);
    }

    // static addTeam(teamName: string) {
    //     this.teams.push(teamName);
    // }
}
