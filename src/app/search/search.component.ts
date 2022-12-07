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
    if (this.profileService.profiles.length == 0) {
      this.profileService.profiles.push({"name": "Julie Délivre"});     
    } 
    console.log(this.evtService.events.length);
  }

  searchEvent() {
    this.type = 'event';
  }

  searchPeople() {
    this.type = 'profile';
  }
}
