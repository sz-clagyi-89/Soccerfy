import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ TeamService, PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
