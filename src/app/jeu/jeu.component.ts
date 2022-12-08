import { Component } from '@angular/core';
import { MarkerService } from '../services/marker.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent {
  // https://boardgamegeek.com/xmlapi2/id?3

  tabJeu = [XMLDocument];

  axios = require('axios');
  params = {
    access_key: '56a31143cc4ed614dbc4820933d1df34',
    query: 'hot?type=boardgame'
  };

  coord = [];

  constructor(private markerService: MarkerService) {}

  ngOnInit(): void {
    this.axios.get('https://boardgamegeek.com/xmlapi2/'+this.params['query'])
    .then((response: { data: any; }) => {
      this.tabJeu.push(response.data);
      console.log(this.tabJeu[1]);
      return this.coord;
    }).catch((error: any) => {
      console.log(error)
    });
  }
  }
