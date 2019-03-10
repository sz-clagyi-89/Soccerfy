import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerModel } from 'src/app/shared/player.model';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  ID: number;
  player: PlayerModel;

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.ID = +params['id'];
        this. player = this.playerService.getPlayer(this.ID);
      });
  }

  onNavigateToPlayerEdit() {
    this.router.navigate(['/players', this.ID, 'edit']);
  }

}
