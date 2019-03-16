import { TeamModel } from './team.model';
import { Subject } from 'rxjs';
import { PlayerModel } from './player.model';
import { NgForm } from '@angular/forms';


export class TeamService {
    teamArrayChanged = new Subject<TeamModel[]>();
    teamPlayerArrayChanged = new Subject<PlayerModel[]>();

    teamIdPasser = new Subject<number>();

    teams: TeamModel[] = [
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chelsea FC',
            'Premier Leauge',
            'Maurizio Sarri',
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Arsenal_2_Chelsea_1_%2834876312101%29.jpg',
            5,
            2,
            1,
            [new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF',
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'TESTING PLAYR TO TEAM',
                28,
                'Portugese',
                'Juventus FC',
                'CF',
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'Ronaldo',
                28,
                'Portugese',
                'Juventus FC',
                'CF'
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF',
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'TESTING PLAYR TO TEAM',
                28,
                'Portugese',
                'Juventus FC',
                'CF',
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'Ronaldo',
                28,
                'Portugese',
                'Juventus FC',
                'CF'
            )]
            ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aberdeen FC',
            'Scottish Leauge',
            'Derek McInnes',
            'https://upload.wikimedia.org/wikipedia/commons/3/3d/Scottish_League_Cup_2014_-_Fan_display.jpg',
            3,
            2,
            1,
            [new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF',
            )]
        ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/1/10/Escudo_real_madrid_1941b.png',
            'Real Madrid',
            'BBVA',
            'Santiago Solari',
            'https://upload.wikimedia.org/wikipedia/commons/5/54/Real_Madrid_vs_Bayern_Munich.jpg',
            1,
            2,
            0,
            [new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF'
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'Ronaldo',
                28,
                'Portugese',
                'Juventus FC',
                'CF'
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'Ronaldo',
                28,
                'Portugese',
                'Juventus FC',
                'CF'
            ),
            new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
                'Ronaldo',
                28,
                'Portugese',
                'Juventus FC',
                'CF'
            )]
            ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/e/e8/Juventus_Logo_2017.png',
            'Juventus FC',
            'Serie A TIM',
            'Massimiliano Allegri',
            'https://upload.wikimedia.org/wikipedia/commons/d/db/Inside_Juventus_Stadium.jpg',
            4,
            0,
            1,
            [new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF'
            )]
            ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fc_barca.png',
            'Barcelona FC',
            'BBVA',
            'Ernesto Valverde',
            'https://upload.wikimedia.org/wikipedia/commons/8/88/Barcelona_vs_Arsenal_Teams_line_up.jpg',
            5,
            0,
            0,
            [new PlayerModel(
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
                'Messi',
                30,
                'Argentinean',
                'Chelsea FC',
                'CMF'
            )]
        )
    ];

    getTeams(): TeamModel[] {
        return this.teams.slice();
    }

    getTeam(index: number): TeamModel {
        return this.teams[index];
    }

    getTeamPlayers(index: number) {
        return this.teams[index].players;
    }

    addTeam(item: TeamModel): void {
        this.countPerformance(item);
        this.teams.push(item);
        this.teamArrayChanged.next(this.teams.slice());
    }

    updateTeam(index: number, updatedTeam: TeamModel): void {
        updatedTeam.players = this.teams[index].players;
        this.countPerformance(updatedTeam);

        this.teams[index] = updatedTeam;
        this.teamArrayChanged.next(this.teams.slice());
    }

    deleteTeam(index: number) {
        this.teams.splice(index, 1);
        this.teamArrayChanged.next(this.teams.slice());
    }

    ///////////////////////
    addPlayer(teamID: number, newPlayer: PlayerModel): void {
        const teamPlayers = this.teams[teamID].players;
        const isPlayerContracted = teamPlayers.findIndex(el => {
            return el.id === newPlayer.id;
        });

        if (isPlayerContracted === -1) {
            teamPlayers.push(newPlayer);
            this.teamPlayerArrayChanged.next(this.teams[teamID].players);
            console.log(teamPlayers);
        } else {
            console.log('This player is already CONTRACTED soxou can\'t him again');
        }

        
    }
    /////////////////////

    removePlayer(teamIndex: number, playerIndex: number) {
        this.teams[teamIndex].players.splice(playerIndex, 1);
        this.teamPlayerArrayChanged.next(this.teams[teamIndex].players);
        console.log(this.teams[teamIndex].players);
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
