import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})

export class AddEventComponent implements OnInit {
  name;
  type;
  date;
  hour;
  desc;
  nb;
  age;

  constructor(public monRouteur: Router) {
    this.name = "";
    this.type = "";
    this.date = Date.now();
    this.hour = "";
    this.desc = "";
    this.nb = 1;
    this.age = 3;
  }

  ngOnInit(): void {}

  next() {
    this.monRouteur.navigate(["add/next"], { queryParams: { name: this.name, type: this.type, date: this.date, hour: this.hour, desc: this.desc, nb: this.nb, age: this.age }});
  }
}
