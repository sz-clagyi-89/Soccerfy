import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../team.model';
import { TeamService } from 'src/app/shared/teams.service';

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
    console.log(this.teams);
  }

}
