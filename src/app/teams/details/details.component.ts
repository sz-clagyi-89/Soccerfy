import { Component, OnInit } from '@angular/core';
import { TeamModel } from '../../shared/team.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from 'src/app/shared/team.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  teamItem: TeamModel;
  ID: number;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
          this.ID = +params['id'];
          this.teamItem = this.teamService.getTeam(+params['id']);
          this.teamItem.countStrength();
          console.log(this.teamItem.getStrength());
        }
      );
  }

  onNavigateToEdit() {
    this.router.navigate(['/teams', this.ID, 'edit']);
  }

}
