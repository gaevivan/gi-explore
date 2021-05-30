import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    // NgxsModule.forRoot([CurrentProjectState]),
    // NgxsStoragePluginModule.forRoot({
    //   key: [CurrentProjectState],
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
