import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../services/marker.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  map!: L.Map;
  icon = {
    icon: L.icon({
      iconSize: [ 40, 40 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../assets/marker.png',
    })
  };

  axios = require('axios');
  params = {
    access_key: '56a31143cc4ed614dbc4820933d1df34',
    query: 'Lyon France'
  };

  coord = [];

  constructor(private markerService: MarkerService) {}

  ngOnInit(): void {
    this.axios.get('http://api.positionstack.com/v1/forward?access_key='+this.params['access_key']+'&query='+this.params['query'])
    .then((response: { data: any; }) => {
      console.log(response.data);
      return this.coord;
    }).catch((error: any) => {
      console.log(error)
    });
  }

  private initMap(): void {
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
    
    //const marker = L.marker([this.coord], this.icon);
    //marker.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}