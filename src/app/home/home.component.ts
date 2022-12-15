import { Component } from '@angular/core';
import { EvtService } from '../services/evt.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allUsers = [];

  constructor(public evtService: EvtService, public profileService: ProfileService) {}

  ngOnInit(): void {
    if (this.evtService.events.length == 0) {
      this.evtService.events.push({"name": "Soirée jeux de rôle", "type": "role", "date": "16/12/2022", "hour": "20:00", "desc": "Soirée initiation au jeu de rôle pour découvrir cet univers en s'amusant !", "nb": "15", "age": "18", "rue": "6 rue Voltaire", "ville": "Pierre-Bénite", "cp": "69310", "country": "France", "orga": "Alain Terrieur", "tel": "0665544332"});
      this.evtService.events.push({"name": "Loup-garou party", "type": "loup", "date": "20/12/2022", "hour": "17:00", "desc": "Viens jouer avec tes amis à notre loup-garou party pour essayer de survivre au sein du village...", "nb": "9", "age": "16", "rue": "1 rue Puits Gaillot", "ville": "Lyon", "cp": "69001", "country": "France", "orga": "Julie Délivre", "tel": "0777889966"});
      this.evtService.events.push({"name": "Après-midi jeux de cartes", "type": "carte", "date": "10/01/2023", "hour": "14:00", "desc": "Après-midi tranquille avec des jeux de cartes autour d'un goûter", "nb": "6", "age": "14", "rue": "3 rue Flachet", "ville": "Villeurbanne", "cp": "69100", "country": "France", "orga": "Vincent Tim", "tel": "0123344556"}); 
      this.evtService.events.push({"name": "Sherlock Holmes", "type": "enquete", "date": "10/12/2022", "hour": "18:00", "desc": "Es-tu un bon enquêteur, viens tester ton sens de la déduction dans une soirée détective", "nb": "6", "age": "18", "rue": "79 rue du Dauphiné", "ville": "Lyon", "cp": "69003", "country": "France", "orga": "Selma Ritime", "tel": "0945872309"}); 
    } 
    if (this.profileService.profiles.length == 0) {
      this.profileService.profiles.push({"name": "Julie Délivre", "tel": "0777889966"});
      this.profileService.profiles.push({"name": "Selma Ritime", "tel": "0945872309"});     
      this.profileService.profiles.push({"name": "Alain Terrieur", "tel": "0665544332"});     
      this.profileService.profiles.push({"name": "Vincent Tim", "tel": "0123344556"});     
    } 
  }

  /*async getUsers() {
       this.allUsers = await this.profileService.getAllUsers();
       console.log(this.allUsers);
    }
	*/
}
