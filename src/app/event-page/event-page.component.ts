import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent {
  @Input() name = "";
  @Input() type = "";
  @Input() date = "";
  @Input() hour = "";
  @Input() desc = "";
  @Input() nb = "";
  @Input() age = "";
  @Input() rue = "";
  @Input() ville = "";
  @Input() cp = "";
  @Input() id = 0;
  @Input() orga = "";

  constructor(private monActRouteur: ActivatedRoute, public evtService: EvtService) {}

  ngOnInit(): void {
    this.id = parseInt(this.monActRouteur.snapshot.params['id']);
    this.name = this.evtService.events[this.id].name;
    this.type = this.evtService.events[this.id].type;
    this.date = this.evtService.events[this.id].date;
    this.hour = this.evtService.events[this.id].hour;
    this.desc = this.evtService.events[this.id].desc;
    this.nb = this.evtService.events[this.id].nb;
    this.age = this.evtService.events[this.id].age;
    this.rue = this.evtService.events[this.id].rue;
    this.ville = this.evtService.events[this.id].ville;
    this.cp = this.evtService.events[this.id].cp;
    this.orga = this.evtService.events[this.id].orga;
  }
}
