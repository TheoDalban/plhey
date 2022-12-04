import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  searchText = "";
  type: string = 'event';

  constructor(public evtService: EvtService) {}

  ngOnInit(): void {
    console.log(this.evtService.events.length);
    console.log(this.evtService.events[0].name);
  }

  search(txt: any) {
    if (this.type == 'event') {
      this.searchEvent;
      console.log(txt);
    } else {
      this.searchPeople;
      console.log(txt);
    }
  }

  searchEvent() {
    this.searchText = 'Evènement';
    this.type = 'event';
  }

  searchPeople() {
    this.searchText = 'Personne';
    this.type = 'people';
  }
}
