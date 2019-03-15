import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from 'src/app/shared/team.model';

@Component({
  selector: 'app-manager-teams-item',
  templateUrl: './manager-teams-item.component.html',
  styleUrls: ['./manager-teams-item.component.css']
})
export class ManagerTeamsItemComponent implements OnInit {
  @Input() team: TeamModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    console.log(this.team);
    console.log(this.index);
  }

}
