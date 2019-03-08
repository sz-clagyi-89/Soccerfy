export class PlayerModel {
    public name: string;
    public age: number;
    public nationality: string;
    public team: string;
    public attack: number;
    public middle: number;
    public defense: number;
    public strength: number;
    public goals: number;
    public assistance: number;

    constructor(name: string, age: number, nat: string, team: string,
                att: number, mid: number, def: number,
                strength: number, goals:number, ass: number) {
        this.name = name;
        this.age = age;
        this.nationality = nat;
        this.team = team;
        this.attack = att;
        this.middle = mid;
        this.defense = def;
        this.strength = strength;
        this.goals = goals;
        this.assistance = ass;
    }
}
