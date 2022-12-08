import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.scss']
})
export class ParticipationComponent {
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
  @Input() tel = "";

  constructor(private monActRouteur: ActivatedRoute, private monRouteur: Router, public evtService: EvtService) {}

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
    this.tel = this.evtService.events[this.id].tel;
  }

  accepter() {
    this.evtService.myevents.push({"name": this.name, "type": this.type, "date": this.date, "hour": this.hour, "desc": this.desc, "nb": this.nb, "age": this.age, "rue": this.rue, "ville": this.ville, "cp": this.cp, "country": "France", "orga": this.orga, "tel": this.tel});
    setTimeout(() => {this.monRouteur.navigateByUrl("event/"+this.id)}, 500);
  }
}