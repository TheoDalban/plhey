import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsComponent } from './forms/forms.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MapComponent } from './map/map.component';
import { JeuComponent } from './jeu/jeu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { EvtService } from './services/evt.service';
import { MessagesComponent } from './messages/messages.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileService } from './services/profile.service';
import { SettingsComponent } from './settings/settings.component';
import { SessionLoginService } from './services/session-login.service';
import { SplashComponent } from './splash/splash.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './services/marker.service';
import { PopupService } from './services/popup.service';
import { JeuLibComponent } from './jeu-lib/jeu-lib.component';
import { AmisAddComponent } from './amis-add/amis-add.component';
import { AddEvent2Component } from './add-event2/add-event2.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FormsComponent,
    CreateAccountComponent,
    MapComponent,
    JeuComponent,
    NavbarComponent,
    AddEventComponent,
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    EventItemComponent,
    EventPageComponent,
    ProfileItemComponent,
    ProfilePageComponent,
    SettingsComponent,
    SplashComponent,
    JeuLibComponent,
    AmisAddComponent,
    AddEvent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EvtService,
              ProfileService,
              SessionLoginService,
              MarkerService,
              PopupService],
  bootstrap: [AppComponent],
})

export class AppModule { }
