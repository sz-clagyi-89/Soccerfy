import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-team-player-item',
  templateUrl: './team-player-item.component.html',
  styleUrls: ['./team-player-item.component.css']
})
export class TeamPlayerItemComponent implements OnInit {
  @Input() teamPlayer: PlayerModel;
  @Input() teamIndex: number;
  @Input() playerIndex: number;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onRemovePlayer() {
    this.teamService.removePlayer(this.teamIndex, this.playerIndex);
  }

}
