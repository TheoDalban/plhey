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
    this.evtService.events.push({"name": this.name, "address": this.address, "type": this.type, "nb": this.nb});
    console.log(this.evtService.events);
  }
}
