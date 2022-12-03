import { Component } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 constructor(public evtService: EvtService) {}
}
