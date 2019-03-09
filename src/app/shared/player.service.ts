import { PlayerModel } from './player.model';
import { Subject } from 'rxjs';

export class PlayerService {
    playerArrayChanged =  new Subject<PlayerModel[]>();

    private players: PlayerModel[] = [
        new PlayerModel(
            'Messi',
            30,
            'Argentinean',
            'Barcelona',
            'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
        ),
        new PlayerModel(
            'Ronaldo',
            28,
            'Portugese',
            'Real Madrid',
            'https://upload.wikimedia.org/wikipedia/commons/f/fd/Cristiano_Ronaldo_after_2018_UEFA_Champions_League_Final.jpg'
        ),
    ];

    getPlayers() {
        return this.players.slice();
    }

    addPlayer(item: PlayerModel) {
        this.players.push(item);
        this.playerArrayChanged.next(this.players.slice());
    }
}
