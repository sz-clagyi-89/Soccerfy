import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './teams/details/details.component';
import { EditComponent } from './teams/edit/edit.component';
import { SelectComponent } from './select/select.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
import { TeamPlayersListComponent } from './teams/team-players-list/team-players-list.component';
import { ManagerTeamSummaryComponent } from './manager/manager-teams-details/manager-team-summary/manager-team-summary.component';
import { SelectPlayerComponent } from './players/select-player/select-player.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/teams', pathMatch: 'full'},
    {path: 'teams', component: TeamsComponent, children: [
        {path: '', component: SelectComponent},
        {path: 'new', component: EditComponent},
        {path: ':id', component: DetailsComponent},
        {path: ':id/edit', component: EditComponent},
        {path: ':id/teamplayers', component: TeamPlayersListComponent},
    ]},
    {path: 'players', component: PlayersComponent, children: [
        {path: '', component: SelectPlayerComponent},
        {path: 'new', component: PlayerEditComponent},
        {path: ':id', component: PlayerDetailsComponent},
        {path: ':id/edit', component: PlayerEditComponent},
    ]},
    {path: 'manager', component: ManagerComponent, children: [
        {path: '', component: SelectComponent},
        {path: ':id', component: ManagerTeamSummaryComponent}
    ]},
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
