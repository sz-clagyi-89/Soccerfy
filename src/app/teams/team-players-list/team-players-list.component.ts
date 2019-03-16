import { Component, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { TeamService } from 'src/app/shared/team.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-team-players-list',
  templateUrl: './team-players-list.component.html',
  styleUrls: ['./team-players-list.component.css']
})
export class TeamPlayersListComponent implements OnInit {
  teamID: number;
  teamPlayers: PlayerModel[] = [];

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.teamID = +params['id']);
    this.teamPlayers = this.teamService.getTeamPlayers(this.teamID);
    this.teamService.teamPlayerArrayChanged
      .subscribe((playerArrayUpdated: PlayerModel[]) => {
        this.teamPlayers = playerArrayUpdated;
        // console.log(this.teamPlayers);
    });
  }

  onBackToDetails() {
    this.router.navigate(['/teams', this.teamID]);
  }

}
