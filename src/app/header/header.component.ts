import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { ServerService } from '../shared/server.service';
import { PlayerService } from '../shared/player.service';
import { PlayerModel } from '../shared/player.model';
import { TeamModel } from '../shared/team.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private teamService: TeamService,
              private serverService: ServerService,
              private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSave() {
    const teams = this.teamService.getTeams();
    this.serverService.storeTeams(teams)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
        );
    
    const players = this.playerService.getPlayers();
    this.serverService.storePlayers(players)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

  onGet() {
    this.serverService.getTeams()
      .subscribe(
        (teams: TeamModel[]) => {
          this.teamService.initiateTeams(teams);
        },
        (error) => console.log(error)
    );

    this.serverService.getPlayers()
    .subscribe(
      (players: PlayerModel[]) => {
        this.playerService.initiatePlayers(players);
      },
      (error) => console.log(error)
    );
  }
}
