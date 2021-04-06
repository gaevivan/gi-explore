import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { ColorModeState } from '@shared/stores/color-mode/color-mode.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ProjectListState } from '@shared/stores/project-list/project-list.state';
import { DesignListState } from '@shared/stores/design-list/design-list.state';
import { GameListState } from '@shared/stores/game-list/game-list.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NgxsModule.forRoot([ColorModeState, ProjectListState, DesignListState, GameListState]),
    NgxsStoragePluginModule.forRoot({
      key: [ColorModeState],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
