import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PlayerModel } from 'src/app/shared/player.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  playersArray: PlayerModel[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playersArray = this.playerService.getPlayers();
  }

}
