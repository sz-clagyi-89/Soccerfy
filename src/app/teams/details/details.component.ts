import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamModel } from '../../shared/team.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  teamItem: TeamModel;
  ID: number;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: Params) => {
          this.ID = +params['id'];
          this.teamItem = this.teamService.getTeam(+params['id']);
          if (typeof this.teamItem.countStrength !== 'undefined') {
            this.teamItem.countStrength();
          }
        }
      );
  }

  onNavigateToEdit() {
    this.router.navigate(['/teams', this.ID, 'edit']);
  }

  onDeleteTeam() {
    this.teamService.deleteTeam(this.ID);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
