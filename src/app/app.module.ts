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
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EvtService],
  bootstrap: [AppComponent],
})

export class AppModule { }
