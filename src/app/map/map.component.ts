import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../services/marker.service';

import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  public map!: L.Map;
  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: '../../node_modules/leaflet/dist/images/marker-shadow.png'
    })
  };

  constructor(private markerService: MarkerService) { }

  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/leaflet/";
    const marker = L.marker([51.5, -0.09], this.icon).addTo(this.map);
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
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCitiesMarkers(this.map);
  }
}