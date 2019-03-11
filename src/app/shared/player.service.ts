import { PlayerModel } from './player.model';
import { Subject } from 'rxjs';

export class PlayerService {
    playerArrayChanged =  new Subject<PlayerModel[]>();

    private players: PlayerModel[] = [
        new PlayerModel(
            'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
            'Messi',
            30,
            'Argentinean',
            'Barcelona',
            'CMF',
        ),
        new PlayerModel(
            'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg',
            'Ronaldo',
            28,
            'Portugese',
            'Juventus',
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
        this.players[index] = updatedPlayer;
        this.playerArrayChanged.next(this.players.slice());
    }

    deletePlayer(index: number) {
        this.players.splice(index, 1);
        this.playerArrayChanged.next(this.players.slice());
    }
}
