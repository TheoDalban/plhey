import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  searchText = "";
  type: string = 'event';
  people = [];
  events = [];

  constructor(public evtService: EvtService, public profileService: ProfileService) {}

  ngOnInit(): void {
    console.log(this.evtService.events.length);
  }

  searchEvent() {
    this.type = 'event';
    let btnEvent = document.getElementById("btnEvent");
    btnEvent!.style.background = "#efd229";
    let btnPerson = document.getElementById("btnPerson");
    btnPerson!.style.background = "white";
  }

  searchPerson() {
    this.type = 'profile';
    let btnEvent = document.getElementById("btnEvent");
    btnEvent!.style.background = "white";
    let btnPerson = document.getElementById("btnPerson");
    btnPerson!.style.background = "#efd229";
  }
}
