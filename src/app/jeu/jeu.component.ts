import { Component } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent {
  jeux: any;
  axios = require('axios');

  constructor() {}

  ngOnInit(): void {
    this.axios.get('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=KVsy3riu5Q')
    .then((response: { data: any; }) => {
      this.jeux = response.data.games;
    });
  }
}
  /*  this.axios.get('https://boardgamegeek.com/xmlapi2/'+this.params['query'])
    .then((response: { data: any; }) => {
      console.log(response.data);
      const options = { // set up the default options 
        textKey: 'item', // tag name for text nodes
        attrKey: 'attr', // tag for attr groups
        //cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
      };
      let jeux = this.ngxXmlToJsonService.xmlToJson(response.data, options)
      console.log(jeux);
    }).catch((error: any) => {
      console.log(error)
    });
  }
*/
