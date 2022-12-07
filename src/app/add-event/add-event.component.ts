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
  nb = 1;

  constructor(public evtService: EvtService) {}

  ngOnInit(): void {}

  continue() {
    
  }
}
