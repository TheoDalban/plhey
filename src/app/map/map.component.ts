import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../services/marker.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  public map!: L.Map;
  icon = {
    icon: L.icon({
      iconSize: [ 30, 30 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: '../../assets/marker.png',
    })
  };

  constructor(private markerService: MarkerService) { }

  ngOnInit(): void {}

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
    
    const marker = L.marker([45.750000, 4.850000], this.icon);
    marker.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}