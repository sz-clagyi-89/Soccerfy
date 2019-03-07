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
  editMode: false;
  id: number;
  teamInstance: TeamModel;
  teamForm: FormGroup;
  countedStrength: number;
  subscription: Subscription;
  fullPerform: number;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.init();
        // this.oncRecountStrength();
    });
  }

  private init() {
    this.teamInstance = this.teamService.getTeam(this.id);

    this.teamForm = new FormGroup({
      'imagePath': new FormControl(this.teamInstance.imagePath, Validators.required),
      'name': new FormControl(this.teamInstance.name, Validators.required),
      'leauge': new FormControl(this.teamInstance.leauge, Validators.required),
      'headCoach': new FormControl(this.teamInstance.headCoach, Validators.required),
      'logo': new FormControl(this.teamInstance.logo, Validators.required),
      'victory': new FormControl(this.teamInstance.victory, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'loss': new FormControl(this.teamInstance.loss, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'draw': new FormControl(this.teamInstance.draw, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'strength': new FormControl(null)
    });
  }

  onSubmit() {
    this.teamService.updateTeam(this.id, this.teamForm.value);
    // console.log(this.teamInstance.strength);
    this.onCancelForm();
  }

  onCancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // oncRecountStrength() {
  //   if (this.teamForm.value.draw !== 0) {
  //     const straightPerform = (this.teamForm.value.victory / (this.teamForm.value.victory + this.teamForm.value.loss)) * 100;
  //     this.teamInstance.strength = ((this.teamForm.value.draw * 50) + straightPerform) / (this.teamForm.value.draw + 1);
  //     // console.log(this.fullPerform);
  //     return this.teamInstance.strength;
  //   } else if (this.teamForm.value.victory === 0 && this.teamForm.value.draw === 0 && this.teamForm.value.loss === 0) {
  //     this.teamInstance.strength = 0;
  //       // console.log(this.fullPerform);
  //       return this.teamInstance.strength;
  //   } else {
  //     this.teamInstance.strength = (this.teamForm.value.victory / (this.teamForm.value.victory + this.teamForm.value.loss)) * 100;
  //     // console.log(this.fullPerform);
  //     return this.teamInstance.strength;
  //   }
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
