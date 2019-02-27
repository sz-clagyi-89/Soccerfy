import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { ManagerComponent } from './manager/manager.component';
import { HeaderComponent } from './header/header.component';
import { LeaugeComponent } from './manager/leauge/leauge.component';
import { TeamListComponent } from './manager/team-list/team-list.component';
import { TeamPlayersComponent } from './manager/team-players/team-players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    ManagerComponent,
    HeaderComponent,
    LeaugeComponent,
    TeamListComponent,
    TeamPlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
