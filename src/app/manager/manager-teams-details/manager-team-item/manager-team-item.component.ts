import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-manager-team-item',
  templateUrl: './manager-team-item.component.html',
  styleUrls: ['./manager-team-item.component.css']
})
export class ManagerTeamItemComponent implements OnInit {
  @Input() playerItem: PlayerModel;
  @Input() index: number;
  activeTeamIndex: number;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit() {
    /////
    // RECEIVING ACTIVE TEM ID;
    this.teamService.teamIdPasser
      .subscribe((activeTeamID: number) => {
        this.activeTeamIndex = activeTeamID;
        console.log('TeamIndex received from teamSummary through teamService, WELL DONE, You are close :))) : ' + this.activeTeamIndex);
      });
  }

  onAddPlayerToTeam() {
    this.teamService.addPlayer(this.activeTeamIndex, this.playerItem);
  }

}
