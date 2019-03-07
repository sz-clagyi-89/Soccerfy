import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamModel } from 'src/app/shared/team.model';
import { TeamService } from 'src/app/shared/team.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  editMode = false;
  id: number;
  teamInstance: TeamModel;
  teamForm: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.init();
    });
  }

  private init() {
    let imagePath = '';
    let name = '';
    let leauge = '';
    let headCoach = '';
    let logo = '';
    let victory = 0;
    let loss = 0;
    let draw = 0;
    let strength = 0;

    if (this.editMode) {
      const team = this.teamService.getTeam(this.id);
      imagePath = team.imagePath;
      name = team.name;
      leauge = team.leauge;
      headCoach = team.headCoach;
      logo = team.logo;
      victory = team.victory;
      loss = team.loss;
      draw = team.draw;
      strength = team.strength;
    }

    this.teamForm = new FormGroup({
      'imagePath': new FormControl(imagePath, Validators.required),
      'name': new FormControl(name, Validators.required),
      'leauge': new FormControl(leauge, Validators.required),
      'headCoach': new FormControl(headCoach, Validators.required),
      'logo': new FormControl(logo, Validators.required),
      'victory': new FormControl(victory, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'loss': new FormControl(loss, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'draw': new FormControl(draw, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'strength': new FormControl(strength)
    });

  }

  onSubmit() {
    if (this.editMode) {
      this.teamService.updateTeam(this.id, this.teamForm.value);
      // console.log(this.teamInstance.strength);
    } else {
      this.teamService.addTeam(this.teamForm.value);
    }
    this.onCancelForm();
  }

  onCancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
