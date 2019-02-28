import { TeamModel } from '../teams/team.model';


export class TeamService {

    teams: TeamModel[] = [
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chelsea FC',
            'EFL',
            ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aberdeen FC',
            'Scottish Leauge'
        ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/1/13/Vasas_logo.jpg',
            'Vasas SC',
            'Hungarian Leauge'
        ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aber FC',
            'SCOT',
            ),
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chel FC',
            'EF'
        )
    ];

    getTeams() {
        return this.teams.slice();
    }

}
