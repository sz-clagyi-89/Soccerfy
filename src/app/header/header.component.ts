import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { ServerService } from '../shared/server.service';
import { TeamModel } from '../shared/team.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private teamService: TeamService,
              private serverService: ServerService) { }

  ngOnInit() {
  }

  onSave() {
    const teams = this.teamService.getTeams();
    this.serverService.storeTeams(teams)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
        );
  }

  onGet() {
    this.serverService.getTeams()
      .subscribe((teams: any[]) => {
        console.log(teams);
      }
    );
  }
}
