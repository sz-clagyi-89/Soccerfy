import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/team.service';
import { TeamModel } from 'src/app/shared/team.model';

@Component({
  selector: 'app-manager-teams-list',
  templateUrl: './manager-teams-list.component.html',
  styleUrls: ['./manager-teams-list.component.css']
})
export class ManagerTeamsListComponent implements OnInit {
  teams: TeamModel[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.teamService.teamArrayChanged
      .subscribe((updatedTeamArray: TeamModel[]) => {
        this.teams = updatedTeamArray;
      });
  }

}
