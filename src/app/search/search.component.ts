import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
        <input type="text" [value]="username">
        <button>Ok</button>
    `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = 'search'
}
