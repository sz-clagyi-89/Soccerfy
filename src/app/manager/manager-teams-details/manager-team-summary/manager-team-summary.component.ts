import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';
import { TeamModel } from 'src/app/shared/team.model';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-manager-team-summary',
  templateUrl: './manager-team-summary.component.html',
  styleUrls: ['./manager-team-summary.component.css']
})
export class ManagerTeamSummaryComponent implements OnInit {
  teamSummary: TeamModel;
  teamPlayers: PlayerModel[];
  teamID: number;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.teamID = +params['id'];
        this.teamSummary = this.teamService.getTeam(+params['id']);
        this.teamPlayers = this.teamService.getTeamPlayers(+params['id']);
        ////////////////
        //// you receive the TEAM ID'S here you will pass it in service here and forward it into the items;
        this.teamService.teamIdPasser.next(+params['id']);
      });
  }

}
