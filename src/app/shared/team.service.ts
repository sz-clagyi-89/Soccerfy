import { TeamModel } from './team.model';
import { Subject } from 'rxjs';


export class TeamService {
    teamArrayChanged = new Subject<TeamModel[]>();

    teams: TeamModel[] = [
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chelsea FC',
            'Premier Leauge',
            'Maurizio Sarri',
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Arsenal_2_Chelsea_1_%2834876312101%29.jpg',
            5,
            2,
            1
            ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aberdeen FC',
            'Scottish Leauge',
            'Derek McInnes',
            'https://upload.wikimedia.org/wikipedia/commons/3/3d/Scottish_League_Cup_2014_-_Fan_display.jpg',
            3,
            2,
            1
        ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/1/10/Escudo_real_madrid_1941b.png',
            'Real Madrid',
            'BBVA',
            'Santiago Solari',
            'https://upload.wikimedia.org/wikipedia/commons/5/54/Real_Madrid_vs_Bayern_Munich.jpg',
            1,
            2,
            0
            ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aber FC',
            'SCOT',
            'Derek McInnes',
            'https://upload.wikimedia.org/wikipedia/commons/3/3d/Scottish_League_Cup_2014_-_Fan_display.jpg',
            4,
            0,
            1
            ),
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chel FC',
            'EF',
            'Maurizio Sarri',
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Arsenal_2_Chelsea_1_%2834876312101%29.jpg',
            5,
            0,
            0
        )
    ];

    getTeams(): TeamModel[] {
        return this.teams.slice();
    }

    getTeam(index: number): TeamModel {
        return this.teams[index];
    }

    addTeam(item: TeamModel): void {
        this.countPerformance(item);
        this.teams.push(item);
        this.teamArrayChanged.next(this.teams.slice());
    }

    updateTeam(index: number, updatedTeam: TeamModel): void {
        this.countPerformance(updatedTeam);
        this.teams[index] = updatedTeam;
        this.teamArrayChanged.next(this.teams.slice());
    }

    deleteTeam(index: number) {
        this.teams.splice(index, 1);
        this.teamArrayChanged.next(this.teams.slice());
    }

    countPerformance(teamObj) {
        const matches = teamObj.victory + teamObj.loss + teamObj.draw;
        if (typeof teamObj.countStrength === 'undefined') {
            teamObj.countStrength = (): number => {
                if (teamObj.draw !== 0) {
                    teamObj.strength = ((teamObj.victory + (0.5 * teamObj.draw)) / (matches)) * 100;
                    return teamObj.strength;
                } else if (matches === 0) {
                    teamObj.strength = 0;
                    return teamObj.strength;
                } else {
                    teamObj.strength = (teamObj.victory / matches) * 100;
                    return teamObj.strength;
                }
            };
        }
    }
}
