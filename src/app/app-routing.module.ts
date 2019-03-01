import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './teams/details/details.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/teams', pathMatch: 'full'},
    {path: 'teams', component: TeamsComponent, children: [
        {path: ':id', component: DetailsComponent}
    ]},
    {path: 'players', component: PlayersComponent},
    {path: 'manager', component: ManagerComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
