export class PlayerModel {
    public name: string;
    public age: number;
    public nationality: string;
    public team: string;
    public imagePath: string;
    public attack: number;
    public middle: number;
    public defense: number;
    public strength: number;
    public goals: number;
    public assistance: number;

    constructor(name: string, age: number, nat: string, team: string, img: string,
                att = 0, mid = 0, def = 0,
                strength = 100, goals = 0, ass = 0) {
        this.name = name;
        this.age = age;
        this.nationality = nat;
        this.team = team;
        this.imagePath = img;
        this.attack = att;
        this.middle = mid;
        this.defense = def;
        this.strength = strength;
        this.goals = goals;
        this.assistance = ass;
    }
}
