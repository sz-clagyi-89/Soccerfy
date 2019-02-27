import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { ManagerComponent } from './manager/manager.component';
import { HeaderComponent } from './header/header.component';
import { LeaugeComponent } from './manager/leauge/leauge.component';
import { TeamListComponent } from './manager/leauge/team-list/team-list.component';
import { TeamPlayersComponent } from './manager/team-players/team-players.component';
import { TeamItemComponent } from './manager/leauge/team-list/team-item/team-item.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayerItemComponent } from './players/players-list/player-item/player-item.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { ListComponent } from './teams/list/list.component';
import { ItemComponent } from './teams/list/item/item.component';
import { DetailsComponent } from './teams/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    ManagerComponent,
    HeaderComponent,
    LeaugeComponent,
    TeamListComponent,
    TeamPlayersComponent,
    TeamItemComponent,
    PlayersListComponent,
    PlayerItemComponent,
    PlayerDetailsComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
