import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.scss']
})
export class AddEvent2Component implements OnInit {
  name = "";
  type = "";
  date = "";
  hour = "";
  desc = "";
  nb = "";
  age = "";
  rue = "";
  ville = "";
  cp = "";
  pays = "France";
  add = "";

constructor(private monRouteur: ActivatedRoute, public evtService: EvtService) {}

  ngOnInit(): void {
    this.monRouteur.queryParams
    .subscribe(params => {
    console.log(params);
    this.name = params['name'];
    this.type = params['type'];
    this.date = params['date'];
    this.hour = params['hour'];
    this.desc = params['desc'];
    this.nb = params['nb'];
    this.age = params['age'];
      });
  }

  addEvent() {
    this.evtService.events.push({"name": this.name, "type": this.type, "date": this.date, "hour": this.hour, "desc": this.desc, "nb": this.nb, "age": this.age, "address": this.rue+" "+this.ville+" "+this.cp, "country": this.pays});
    this.add = "Evènement ajouté !";
  }
}
