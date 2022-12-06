import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {
  @Input() name = "Event 1";
  @Input() address = "Event 1";
  @Input() type = "Event 1";
  @Input() nb = "Event 1";
  @Input() id = 0;
  @Input() profilname = "Julie Délivre";

  constructor(private monActRouteur: ActivatedRoute,public evtService: EvtService) {}

  ngOnInit(): void {
    this.id = parseInt(this.monActRouteur.snapshot.params['id']);
    this.name = this.evtService.events[this.id].name;
    this.address = this.evtService.events[this.id].address;
    this.type = this.evtService.events[this.id].type;
    this.nb = this.evtService.events[this.id].nb;
  }
}
