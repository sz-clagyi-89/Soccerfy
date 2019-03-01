import { TeamModel } from './team.model';
import { Subject } from 'rxjs';


export class TeamService {
    teamArrayChanged = new Subject<TeamModel[]>();

    teams: TeamModel[] = [
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chelsea FC',
            'EFL',
            'Maurizio Sarri',
            'https://cdn.pixabay.com/photo/2015/04/06/11/55/stadium-709181_960_720.jpg'
            ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aberdeen FC',
            'Scottish Leauge',
            'Derek McInnes',
            'https://upload.wikimedia.org/wikipedia/commons/3/3d/Scottish_League_Cup_2014_-_Fan_display.jpg'
        ),
        new TeamModel(
            'https://upload.wikimedia.org/wikipedia/commons/1/10/Escudo_real_madrid_1941b.png',
            'Real Madrid',
            'BBVA',
            'Santiago Solari',
            'https://upload.wikimedia.org/wikipedia/commons/5/54/Real_Madrid_vs_Bayern_Munich.jpg'            
        ),
        new TeamModel(
            'https://www.footballtickets2go.com/assets/images/Aberdeen-FC.png',
            'Aber FC',
            'SCOT',
            'Derek McInnes',
            'https://upload.wikimedia.org/wikipedia/commons/3/3d/Scottish_League_Cup_2014_-_Fan_display.jpg'
            ),
        new TeamModel(
            'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
            'Chel FC',
            'EF',
            'Maurizio Sarri',
            'https://cdn.pixabay.com/photo/2015/04/06/11/55/stadium-709181_960_720.jpg'
        )
    ];

    getTeams() {
        return this.teams.slice();
    }

    addTeam(item: TeamModel) {
        this.teams.push(item);
        this.teamArrayChanged.next(this.teams.slice());
    }

}
