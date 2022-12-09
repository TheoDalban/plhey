import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: L.Map;
  icon = {
    icon: L.icon({
      iconSize: [ 40, 40 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../assets/marker.png',
    })
  };

  constructor(private evtService: EvtService) {}

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [ 45.750000, 4.850000 ],
      zoom: 12
    });
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,    
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'   
    });    
    tiles.addTo(this.map);
    this.addEvent();
  }
     
  private initMap(address: any, name: any): void {
    let axios = require('axios');
    let params = { 
      access_key: '56a31143cc4ed614dbc4820933d1df34',
      query: address
    };
    axios.get('http://api.positionstack.com/v1/forward?access_key='+params['access_key']+'&query='+params['query'])
    .then((response: { data: any; }) => {
      let coord = response.data.data[0];
      console.log(coord)
      const marker = L.marker([coord['latitude'],coord['longitude']], this.icon);
      marker.addTo(this.map); 
      marker.bindPopup(name).openPopup();
    }).catch((error: any) => {
      console.log(error);
    });
  }
    
  addEvent() {
    for (let i=0; i<this.evtService.myevents.length; i++) {
      let address = this.evtService.myevents[i].rue+" "+this.evtService.myevents[i].ville+" "+this.evtService.myevents[i].cp+" "+this.evtService.myevents[i].country;
      let name = this.evtService.myevents[i].name;
      this.initMap(address,name);
    }
  }
}