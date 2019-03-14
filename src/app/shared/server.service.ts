import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TeamModel } from './team.model';
import { map } from 'rxjs/operators';
import { PlayerModel } from './player.model';

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeTeams(teams: TeamModel[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://ng-soccerfy.firebaseio.com/data.json', teams, {headers: headers});
    }

    storePlayers(teams: PlayerModel[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://ng-soccerfy.firebaseio.com/data2.json', teams, {headers: headers});
    }

    getTeams() {
        return this.http.get('https://ng-soccerfy.firebaseio.com/data.json')
            .pipe(
                map((response: Response) => {
                    const data = response.json();
                    return data;
                })
            );
    }

    getPlayers() {
        return this.http.get('https://ng-soccerfy.firebaseio.com/data2.json')
        .pipe(
            map((response: Response) => {
                    const data2 = response.json();
                    return data2;
                }
            )
        );
    }
}