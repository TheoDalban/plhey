import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormsComponent} from "./forms/forms.component";
import { CreateAccountComponent} from "./create-account/create-account.component"

const routes: Routes = [{
  path: "",
  component: AppComponent
},
  {
    path: "map",
    component: MapComponent,
  },
  {
    path:"login",
    component: FormsComponent,
  },
  {
    path: "create",
    component: CreateAccountComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
