import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamModel } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  teamInstance: TeamModel;
  teamForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.init();
    });
  }

  private init() {
    this.teamInstance = this.teamService.getTeam(this.id);
    console.log(this.teamInstance);

    this.teamForm = new FormGroup({
      'imagePath': new FormControl(this.teamInstance.name, Validators.required),
      'name': new FormControl(this.teamInstance.name, Validators.required),
      'leauge': new FormControl(this.teamInstance.leauge, Validators.required),
      'headCoach': new FormControl(this.teamInstance.headCoach, Validators.required),
      'logo': new FormControl(this.teamInstance.logo, Validators.required),
      'victory': new FormControl(this.teamInstance.victory, Validators.required),
      'loss': new FormControl(this.teamInstance.loss, Validators.required),
      'draw': new FormControl(this.teamInstance.draw, Validators.required),
    });
  }

}
