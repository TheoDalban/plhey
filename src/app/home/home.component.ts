import { Component } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public evtService: EvtService) {}

  ngOnInit(): void {
    if (this.evtService.events.length == 0) {
      this.evtService.events.push({"name": "Soirée jeux de rôle", "type": "role", "date": "16/12/2022", "hour": "20:00", "desc": "Soirée initiation au jeu de rôle pour découvrir cet univers en s'amusant !", "nb": "15", "age": "18", "rue": "1 rue des Alizées", "ville": "Lyon", "cp": "69008", "country": "France", "orga": "Alain Terrieur"});
      this.evtService.events.push({"name": "Loup-garou party", "type": "loup", "date": "20/12/2022", "hour": "17:00", "desc": "Viens jouer avec tes amis à notre loup-garou party pour essayer de survivre au sein du village...", "nb": "9", "age": "16", "rue": "4 avenue Charles de Gaulle", "ville": "Lyon", "cp": "69001", "country": "France", "orga": "Julie Délivre"});
      this.evtService.events.push({"name": "Après-midi jeux de cartes", "type": "carte", "date": "10/01/2023", "hour": "14:00", "desc": "Après-midi tranquille avec des jeux de cartes autour d'un goûter", "nb": "6", "age": "14", "rue": "52 rue Victor Hugo", "ville": "Villeurbanne", "cp": "69100", "country": "France", "orga": "Vincent Tim"}); 
      this.evtService.events.push({"name": "Sherlock Holmes", "type": "enquete", "date": "10/12/2022", "hour": "18:00", "desc": "Es-tu un bon enquêteur, viens tester ton sens de la déduction dans une soirée détective", "nb": "6", "age": "18", "rue": "2 boulevard des Chênes", "ville": "Lyon", "cp": "69004", "country": "France", "orga": "Selma Ritime"}); 
    } 
  }
}
