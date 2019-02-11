import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackModule } from './modules/track/track.module';
import { TrackService } from './modules/track/services/track.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrackModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
