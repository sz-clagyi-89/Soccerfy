import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { PlayerModel } from 'src/app/shared/player.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  playersArray: PlayerModel[];

  teamToPlayer: string;

  constructor(private playerService: PlayerService,
              private router: Router,
              private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit() {
    this.subscription = this.playerService.playerArrayChanged
      .subscribe((playersUpdated: PlayerModel[]) => {
        this.playersArray = playersUpdated;
      });
    this.playersArray = this.playerService.getPlayers();
    console.log(this.playersArray);
  }

  onAddPlayer() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();
    // this.subscription3.unsubscribe();
  }

}
