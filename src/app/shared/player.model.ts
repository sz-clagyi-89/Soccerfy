export class PlayerModel {
    public name: string;
    public age: number;
    public nationality: string;
    public team: string;
    public position: string;
    public imagePath: string;
    public attack: number;
    public middle: number;
    public defense: number;
    public goals: number;
    public assistance: number;
    public strength: number;


    constructor(name: string, age: number, nat: string, team: string, position: string, img: string,
                att = 0, mid = 0, def = 0,
                goals = 0, ass = 0, strength = 100) {
        this.name = name;
        this.age = age;
        this.nationality = nat;
        this.team = team;
        this.position = position;
        this.imagePath = img;
        this.attack = att;
        this.middle = mid;
        this.defense = def;
        this.goals = goals;
        this.assistance = ass;
        this.strength = strength;
        
    }
}
