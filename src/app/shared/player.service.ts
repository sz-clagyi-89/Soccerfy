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
        // add it into teamservice player array
    }

    updatePlayer(index: number, updatedPlayer: PlayerModel) {
        updatedPlayer.id = this.players[index].id;
        this.players[index] = updatedPlayer;
        this.playerArrayChanged.next(this.players.slice());

        // update player in teamservice player array
        // remove it from the prev. teamservice
        this.teamService.updatePlayer(updatedPlayer.team, this.players[index].id, updatedPlayer);
        console.log(updatedPlayer.team + ': ' + updatedPlayer.id);
        // update player in teamservice player array
        // remove it from the prev. teamservice
    }

    deletePlayer(index: number) {
        this.players.splice(index, 1);
        this.playerArrayChanged.next(this.players.slice());
        // delete player from team array
    }
}
