import { Component } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent {
  constructor(public evtService: EvtService) {}
}
