import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  name = "";
  address = "";
  type = "";
  nb = 0;
  add = "";

  constructor(public evtService: EvtService) {}

  ngOnInit(): void {
    this.add = "";
  }

  addEvent() {
    this.evtService.events.push({"name": this.name, "address": this.address, "type": this.type, "nb": String(this.nb)});
    console.log(this.evtService.events[0].nb);
    this.add = "Evènement ajouté !";
  }
}
