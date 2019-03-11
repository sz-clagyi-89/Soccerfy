import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }
}
