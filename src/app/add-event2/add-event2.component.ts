import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.scss']
})
export class AddEvent2Component implements OnInit {
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
    console.log(this.evtService.events[0].nb);
    this.add = "Evènement ajouté !";
  }
}
