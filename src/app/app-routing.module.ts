import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ManagerComponent } from './manager/manager.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/teams', pathMatch: 'full'},
    {path: 'teams', component: TeamsComponent},
    {path: 'players', component: PlayersComponent},
    {path: 'manager', component: ManagerComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
