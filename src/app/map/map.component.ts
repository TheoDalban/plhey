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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map.panTo([position.coords.latitude, position.coords.longitude]);
        this.coordsMap(position.coords.latitude, position.coords.longitude);
      }
      );
    }

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,    
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'   
    });    
    tiles.addTo(this.map);
    this.addEvent();
  }
     
  private coordsMap(lat: any, lng: any): void {
    const marker = L.marker([lat, lng], this.icon);
    marker.addTo(this.map); 
  }

  private addressMap(address: any, name: any, date: any, icon: any): void {
    //let axios = require('axios');
    let params = { 
      access_key: 'df80400bcc154490aea2b52d7b0a2236',
      query: address
    };
    var requestOptions = {
      method: 'GET',
    };
    fetch("https://api.geoapify.com/v1/geocode/search?text="+params['query']+"&apiKey="+params['access_key'], requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.features[0]);
      let coord = result.features[0].bbox;
      const marker = L.marker([coord[1],coord[0]], icon);
      marker.addTo(this.map); 
      marker.bindPopup(name+"<br/>"+date);
    })
    .catch(error => console.log('error', error));
  }
    
  addEvent() {
    for (let i=0; i<this.evtService.myevents.length; i++) {
      let address = this.evtService.myevents[i].rue+" "+this.evtService.myevents[i].ville+" "+this.evtService.myevents[i].cp+" "+this.evtService.myevents[i].country;
      let name = this.evtService.myevents[i].name;
      let date = this.evtService.myevents[i].date;
      let icon = {
        icon: L.icon({
          iconSize: [ 40, 40 ],
          iconAnchor: [ 13, 0 ],
          iconUrl: '../../assets/'+this.evtService.myevents[i].type+'.png',
        })
      };
      this.addressMap(address,name,date,icon);
    }
  }
}