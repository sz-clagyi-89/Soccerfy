import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayerItemComponent } from './players/players-list/player-item/player-item.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { ListComponent } from './teams/list/list.component';
import { ItemComponent } from './teams/list/item/item.component';
import { DetailsComponent } from './teams/details/details.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerTeamsListComponent } from './manager/manager-teams-list/manager-teams-list.component';
import { ManagerTeamsItemComponent } from './manager/manager-teams-list/manager-teams-item/manager-teams-item.component';
import { ManagerTeamsDetailsComponent } from './manager/manager-teams-details/manager-teams-details.component';
import { TeamService } from './shared/team.service';
import { EditComponent } from './teams/edit/edit.component';
import { ButtonHoverDirective } from './shared/button-hover.directive';
import { SelectComponent } from './select/select.component';
import { PlayerService } from './shared/player.service';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShortenNamePipe } from './shared/shortenName.pipe';
import { ServerService } from './shared/server.service';
import { TeamPlayersListComponent } from './teams/team-players-list/team-players-list.component';
import { TeamPlayerItemComponent } from './teams/team-players-list/team-player-item/team-player-item.component';
import { ManagerTeamItemComponent } from './manager/manager-teams-details/manager-team-item/manager-team-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    HeaderComponent,
    PlayersListComponent,
    PlayerItemComponent,
    PlayerDetailsComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent,
    ManagerComponent,
    ManagerTeamsListComponent,
    ManagerTeamsItemComponent,
    ManagerTeamsDetailsComponent,
    EditComponent,
    ButtonHoverDirective,
    SelectComponent,
    PlayerEditComponent,
    DropdownDirective,
    ShortenNamePipe,
    TeamPlayersListComponent,
    TeamPlayerItemComponent,
    ManagerTeamItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ TeamService, PlayerService, ServerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
