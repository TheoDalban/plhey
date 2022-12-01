import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myAPIKey = 'YOUR_API_KEY'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = { lng: 11, lat: 49, zoom: 9 };

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.addControl(new NavigationControl());
  }
}