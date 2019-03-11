import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamModel } from '../../shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  teams: TeamModel[];
  subscription: Subscription;

  constructor(private teamService: TeamService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.subscription = this.teamService.teamArrayChanged
      .subscribe((teamsUpdated) => {
        this.teams = teamsUpdated;
      });
  }

  onAddTeam() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
