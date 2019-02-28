import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../team.model';
import { TeamService } from 'src/app/shared/teams.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  teams: TeamModel[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.teamService.teamArrayChanged
      .subscribe((recipeUpdated) => {
        this.teams = recipeUpdated;
      });
    console.log(this.teams);
  }

  onAddTeam() {
    const newTeam = new TeamModel('https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_del_FC_Barcelona._svg.png', 'Barcelona FC', 'BBVA');
    this.teamService.addTeam(newTeam);
  }

}
