import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddEventComponent } from './add-event/add-event.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent} from "./forms/forms.component";
import { CreateAccountComponent} from "./create-account/create-account.component"
import { JeuComponent } from './jeu/jeu.component';
import { MessagesComponent } from './messages/messages.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsComponent } from './settings/settings.component';
import { SplashComponent } from './splash/splash.component';
import { JeuLibComponent } from './jeu-lib/jeu-lib.component';
import { AmisAddComponent } from './amis-add/amis-add.component';
import { AddEvent2Component } from './add-event2/add-event2.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { ParticipationComponent } from './participation/participation.component';

const routes: Routes = [{
  path: "",
  component: SplashComponent,
},
{
  path: "home",
  component: HomeComponent,
},
{
  path: "search",
  component: SearchComponent,
},
{
  path: "add",
  component: AddEventComponent,
},
{
  path: "add/next",
  component: AddEvent2Component,
},
{
  path: "map",
  component: MapComponent,
},
{
  path: "profile",
  component: ProfileComponent,
},
{
  path: "profile/myevents",
  component: MyEventsComponent,
},
{
  path: "profile/settings",
  component: SettingsComponent,
},
{
  path: "messages",
  component: MessagesComponent,
},
{
  path: "event/:id",
  component: EventPageComponent,
},
{
  path: "participation/:id",
  component: ParticipationComponent,
},
{
  path: "profile/:id",
  component: ProfilePageComponent,
},
{
  path:"login",
  component: FormsComponent,
},
{
  path: "create",
  component: CreateAccountComponent,
},{
  path: "create/jeu", 
  component: JeuComponent,
},
{
  path: "create/jeu/jeu-lib", 
  component: JeuLibComponent,
},
{
  path: "create/jeu/jeu-lib/amis", 
  component: AmisAddComponent,
},{
  path: "create/jeu/jeu-lib/amis/home",
  component: HomeComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
