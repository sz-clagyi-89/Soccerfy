import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/shared/player.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  editMode = false;
  ID: number;
  playerInstance: PlayerModel;
  playerForm: FormGroup;
  selectedPost: string;

  posts = ['GK',
          'LB', 'RB', 'CB', 'SW',
          'LMF', 'RMF', 'CMF',
          'LW', 'RW', 'CF'];

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: Params) => {
        this.ID = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log(this.playerInstance);
        console.log(this.editMode);
      });
  }

  initForm() {
    let imagePath = '';
    let name = '';
    let age = null;
    let nationality = '';
    let team = '';
    let position = '';
    let attack = null;
    let middle = null;
    let defense = null;
    let goals = null;
    let assistance = null;
    let strength = null;

    if (this.editMode) {
      // this.position = this.posts.find(el => {
      //   return el === this.playerInstance.position;
      // });
      // console.log(this.position);
      this.playerInstance = this.playerService.getPlayer(this.ID);
      const defaultPost = this.playerInstance.position;

      imagePath = this.playerInstance.imagePath;
      name = this.playerInstance.name;
      age = this.playerInstance.age;
      nationality = this.playerInstance.nationality;
      team = this.playerInstance.team;
      position = defaultPost;
      attack = this.playerInstance.attack;
      middle = this.playerInstance.middle;
      defense = this.playerInstance.defense;
      goals = this.playerInstance.goals;
      assistance = this.playerInstance.assistance;
      strength = this.playerInstance.strength;
    }

    this.playerForm = new FormGroup({
      'imagePath': new FormControl(imagePath, Validators.required),
      'name': new FormControl(name, Validators.required),
      'age': new FormControl(age, Validators.required),
      'nationality': new FormControl(nationality, Validators.required),
      'team': new FormControl(team, Validators.required),
      'position': new FormControl(position, Validators.required),
      'attack': new FormControl(attack, Validators.required),
      'middle': new FormControl(middle, Validators.required),
      'defense': new FormControl(defense, Validators.required),
      'goals': new FormControl(goals, Validators.required),
      'assistance': new FormControl(assistance, Validators.required),
      'strength': new FormControl(strength, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.playerForm.value.position);
    console.log(this.playerForm.value);
    if (this.editMode) {
      this.playerService.updatePlayer(this.ID, this.playerForm.value);
      this.onCancelForm();
    } else {
      this.playerService.addPlayer(this.playerForm.value);
      this.onCancelForm();
    }
  }

  onCancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSelectPost(event: any) {
    this.selectedPost = event.target.value;
    console.log(this.selectedPost);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
