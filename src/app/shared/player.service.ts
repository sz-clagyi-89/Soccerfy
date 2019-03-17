import { PlayerModel } from './player.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TeamService } from './team.service';

@Injectable()
export class PlayerService {
    playerArrayChanged =  new Subject<PlayerModel[]>();

    constructor(private teamService: TeamService) { }

    public players: PlayerModel[] = [
        // new PlayerModel(
        //     'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
        //     'Messi',
        //     30,
        //     'Argentinean',
        //     'CMF',
        // ),
        // new PlayerModel(
        //     'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
        //     'Christiano Ronaldo',
        //     28,
        //     'Portugese',
        //     'STR',
        // ),
    ];

    initiatePlayers(players) {
        this.players = players;
        this.playerArrayChanged.next(this.players.slice());
    }

    getPlayers() {
        return this.players.slice();
    }

    getPlayer(index: number) {
        return this.players[index];
    }

    addPlayer(item: PlayerModel) {
        item.teams = [];
        item.teams.push('Has no team yet');

        item.id = PlayerModel.getID();
        this.players.push(item);
        this.playerArrayChanged.next(this.players.slice());
        console.log(this.players.slice());
    }

    addTeamName(activeTeamIndex: number, playerItem: PlayerModel) {
        const playerID = this.players.findIndex(el => {
            return el.id === playerItem.id;
          });
        const teamName = this.teamService.getTeam(activeTeamIndex).name;
        const teamCheck = this.players[playerID].teams.findIndex(el => {
            return el === teamName;
          });
        
        if (this.players[playerID].teams[0].includes('Has no')) {
          this.players[playerID].teams = [];
        }
        if (teamCheck === -1) {
            this.players[playerID].teams.push(teamName);
            this.playerArrayChanged.next(this.players.slice());
            this.teamService.addPlayer(activeTeamIndex, playerItem);
            console.log('Added teamname to player: ' + this.players[playerID].teams);
        } else {
            console.log('This mate is ALREADY ADDED to this team!');
        }
    }

    updatePlayer(index: number, updatedPlayer: PlayerModel) {

        updatedPlayer.teams = this.players[index].teams;

        updatedPlayer.id = this.players[index].id;
        this.players[index] = updatedPlayer;
        this.playerArrayChanged.next(this.players.slice());
        this.teamService.updatePlayerInfos(updatedPlayer);
        console.log(this.players.slice());
    }

    deletePlayer(index: number) {
        this.players.splice(index, 1);
        this.playerArrayChanged.next(this.players.slice());
    }
}
