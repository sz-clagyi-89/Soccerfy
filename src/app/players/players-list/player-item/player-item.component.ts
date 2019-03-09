import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {
  @Input() playerItem: PlayerModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
