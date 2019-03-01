import { Component, OnInit } from '@angular/core';
import { TeamModel } from '../../shared/team.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  teamItem: TeamModel = new TeamModel(
    'https://m.blog.hu/ns/nst/image/Henya/Vend%C3%A9gszerz%C5%91/chelsea.jpg',
    'Chelsea FC',
    'efl',
    'Maurizio Sarri',
    'https://upload.wikimedia.org/wikipedia/commons/c/c0/2016-17_Premier_League_-_Chelsea_v_Swansea_City.jpg'
    );

  constructor() { }

  ngOnInit() {
  }

}
