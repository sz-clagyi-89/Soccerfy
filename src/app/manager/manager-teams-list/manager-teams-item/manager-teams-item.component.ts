import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-teams-item',
  templateUrl: './manager-teams-item.component.html',
  styleUrls: ['./manager-teams-item.component.css']
})
export class ManagerTeamsItemComponent implements OnInit {
  grids = [
    'Man-abcd', 'Man-bcde', 'Man-cdef', 'Man-defg', 'Man-abcd', 'Man-bcde', 'Man-cdef', 'Man-defg', 'Man-abcd', 'Man-bcde', 'Man-cdef', 'Man-defg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
