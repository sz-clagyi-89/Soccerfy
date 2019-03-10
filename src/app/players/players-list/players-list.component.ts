import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PlayerModel } from 'src/app/shared/player.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  subscription: Subscription;
  playersArray: PlayerModel[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.subscription = this.playerService.playerArrayChanged
      .subscribe((playersUpdated: PlayerModel[]) => {
        this.playersArray = playersUpdated;
      });
    this.playersArray = this.playerService.getPlayers();
  }

  onAddPlayer() {
    this.playerService.addPlayer(
      new PlayerModel(
        'Pogba',
        25,
        'French',
        'Manchaster United',
        'RM',
        'https://upload.wikimedia.org/wikipedia/commons/1/13/Paul_Pogba_in_2018.jpg'
      )
    );
  }

}
