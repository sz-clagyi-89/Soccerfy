import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TeamModel } from './team.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeTeams(teams: TeamModel[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://ng-soccerfy.firebaseio.com/data.json', teams, {headers: headers});
    }

    getTeams() {
        return this.http.get('https://ng-soccerfy.firebaseio.com/data.json')
            .pipe(
                map((response: Response) => {
                    const datas = response.json();
                    return datas;
                })
            );
    }
}