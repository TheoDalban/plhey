import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsComponent } from './forms/forms.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MapComponent } from './map/map.component';
import { IgxBottomNavModule, IgxIconModule } from "igniteui-angular";
import { JeuComponent } from './jeu/jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FormsComponent,
    CreateAccountComponent,
    MapComponent,
    JeuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxBottomNavModule,
    IgxIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
