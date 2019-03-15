import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-manager-team-item',
  templateUrl: './manager-team-item.component.html',
  styleUrls: ['./manager-team-item.component.css']
})
export class ManagerTeamItemComponent implements OnInit {
  @Input() playerItem: PlayerModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
