import { Component, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-manager-teams-details',
  templateUrl: './manager-teams-details.component.html',
  styleUrls: ['./manager-teams-details.component.css']
})
export class ManagerTeamsDetailsComponent implements OnInit {
  playersArray: PlayerModel[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playersArray = this.playerService.getPlayers();
    this.playerService.playerArrayChanged
      .subscribe((updatedPlayerArray: PlayerModel[]) => {
        this.playersArray = updatedPlayerArray;
      });
  }

}
