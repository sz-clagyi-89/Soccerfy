import { PlayerModel } from './player.model';

export class PlayerService {
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
}
