import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PlayerModel } from 'src/app/shared/player.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/shared/player.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamService } from 'src/app/shared/team.service';
import { TeamModel } from 'src/app/shared/team.model';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  editMode = false;
  ID: number;
  teams: TeamModel[];
  teamNames: string[];
  playerInstance: PlayerModel;
  playerForm: FormGroup;
  selectedPost: string;

  posts = ['GK',
          'LB', 'RB', 'CB', 'SW',
          'LMF', 'RMF', 'CMF',
          'STR', 'LW', 'RW', 'CF'];

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService,
              private router: Router,
              private teamService: TeamService) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: Params) => {
        this.ID = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
    // this.playerForm.valueChanges
    //   .subscribe(value => {
    //     console.log(value);
    //   });
  }

  initForm() {
    this.teams = this.teamService.getTeams();
    this.teamNames = this.teams.map((el) => {
      return el.name;
    });

    let imagePath = '';
    let name = '';
    let age = null;
    let nationality = '';
    let position = '';
    let attack = null;
    let middle = null;
    let defense = null;
    let goals = null;
    let assistance = null;
    let strength = null;

    if (this.editMode) {
      this.playerInstance = this.playerService.getPlayer(this.ID);

      imagePath = this.playerInstance.imagePath;
      name = this.playerInstance.name;
      age = this.playerInstance.age;
      nationality = this.playerInstance.nationality;
      position = this.playerInstance.position;
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
    if (this.editMode) {
      /////////////////////
      //// inject teamservice into player,
      //   create method in tema serv wich updates player in the right team upon THIS updateplayer method
      this.playerService.updatePlayer(this.ID, this.playerForm.value);
      this.onCancelForm();
    } else {
      this.playerService.addPlayer(this.playerForm.value);
      this.onCancelForm();
    }
  }

  onCancelForm() {
    this.router.navigate(['../' ], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
