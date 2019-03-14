import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-team-player-item',
  templateUrl: './team-player-item.component.html',
  styleUrls: ['./team-player-item.component.css']
})
export class TeamPlayerItemComponent implements OnInit {
  @Input() teamPlayer: PlayerModel;

  constructor() { }

  ngOnInit() {
  }

}
