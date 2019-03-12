import { PlayerModel } from './player.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TeamService } from './team.service';
import { TeamModel } from './team.model';

@Injectable()
export class PlayerService {
    playerArrayChanged =  new Subject<PlayerModel[]>();

    constructor(private teamService: TeamService) { }

    private players: PlayerModel[] = [
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
            'Ronaldo',
            28,
            'Portugese',
            'Juventus FC',
            'CF',
        ),
    ];

    getPlayers() {
        return this.players.slice();
    }

    getPlayer(index: number) {
        return this.players[index];
    }

    addPlayer(item: PlayerModel) {
        this.players.push(item);
        this.playerArrayChanged.next(this.players.slice());
    }

    updatePlayer(index: number, updatedPlayer: PlayerModel) {
        updatedPlayer.id = this.players[index].id;
        this.players[index] = updatedPlayer;
        this.playerArrayChanged.next(this.players.slice());

        this.teamService.updatePlayer(updatedPlayer.team, this.players[index].id, updatedPlayer);
        console.log(updatedPlayer.team + ': ' + updatedPlayer.id);
    }

    deletePlayer(index: number) {
        this.teamService.deletePlayer(this.players[index].team, this.players[index].id);
        this.players.splice(index, 1);
        this.playerArrayChanged.next(this.players.slice());
        // delete player from team array
    }
}
