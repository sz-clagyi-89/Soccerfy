import { Component, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  posts = ['GK',
          'LB', 'RB', 'CB', 'SW',
          'LMF', 'RMF', 'CMF',
          'LW', 'RW', 'CF'];

  playerForm: PlayerModel;

  constructor() { }

  ngOnInit() {
  }

}
