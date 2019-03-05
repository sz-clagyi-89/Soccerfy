import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamModel } from '../../shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  teams: TeamModel[];
  subscription: Subscription;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.subscription = this.teamService.teamArrayChanged
      .subscribe((recipeUpdated) => {
        this.teams = recipeUpdated;
      });
  }

  onAddTeam() {
    const newTeam = new TeamModel('https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_del_FC_Barcelona._svg.png', 'Barcelona FC', 'BBVA', 'Ernesto Valverde', 'https://images.pexels.com/photos/1062119/pexels-photo-1062119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940');
    this.teamService.addTeam(newTeam);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
