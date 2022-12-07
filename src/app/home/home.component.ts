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
      this.evtService.events.push({"name": "Soirée jeux de rôle", "address": "1 rue Victor Hugo, Lyon 5", "type": "role", "nb": "15"});
      this.evtService.events.push({"name": "Loup-garou party", "address": "10 avenue du Maréchal, Vénissieux", "type": "loup", "nb": "9"});  
    } 
  }
}
