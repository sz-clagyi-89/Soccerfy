import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PlayerModel } from 'src/app/shared/player.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  subscription: Subscription;
  playersArray: PlayerModel[];

  constructor(private playerService: PlayerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.playerService.playerArrayChanged
      .subscribe((playersUpdated: PlayerModel[]) => {
        this.playersArray = playersUpdated;
      });
    this.playersArray = this.playerService.getPlayers();
  }

  onAddPlayer() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
