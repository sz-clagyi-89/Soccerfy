import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../../team.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() teamItem: TeamModel;

  constructor() { }

  ngOnInit() {
  }

}