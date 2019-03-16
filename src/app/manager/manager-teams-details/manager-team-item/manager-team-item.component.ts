import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';
import { PlayerService } from 'src/app/shared/player.service';

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
              private teamService: TeamService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.teamService.teamIdPasser
      .subscribe((activeTeamID: number) => {
        this.activeTeamIndex = activeTeamID;
      });
  }

  onAddPlayerToTeam() {
    ///// triggering the WHOLE ACTION FROM PLAYER AND FROMTHERE WOULD BE PASSED TO TEAM
    this.playerService.addTeamName(this.activeTeamIndex, this.playerItem);
  }

}
