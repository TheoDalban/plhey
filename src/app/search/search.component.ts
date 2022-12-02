import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
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
