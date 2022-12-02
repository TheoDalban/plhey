import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = 'Recherche';
  type: string = 'event';
  people = [];
  events = [];

  constructor() {}

  onInit() {
    this.people = [];
    this.events = [];
    this.type = 'event';
  }

  search() {
    if (this.type == 'event') {
      this.searchEvent();
    } else {
      this.searchPeople();
    }
  }

  searchEvent() {

  }

  searchPeople() {

  }
}
