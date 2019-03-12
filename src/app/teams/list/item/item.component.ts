import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../../../shared/team.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() teamItem: TeamModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    // TEST PLAYER TO TEAM
    this.teamItem.players.forEach((el, i): void => console.log(this.teamItem.name + ' : ' + el.id + ', ' + el.name));
  }

}
