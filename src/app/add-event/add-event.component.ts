import { Component } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  name = "";
  address = "";
  type = "";
  nb = "";

  constructor(public evtService: EvtService) {}

  addEvent() {
    this.evtService.events.push({nom: this.name, lieu: this.address, type: this.type, nbind: this.nb});
    console.log(this.evtService.events);
  }
}
