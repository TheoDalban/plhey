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

const routes: Routes = [{
  path: "",
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
  path: "map",
  component: MapComponent,
},
{
  path: "profile",
  component: ProfileComponent,
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
  path: "login/jeu", 
  component: JeuComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
