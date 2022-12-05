import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  cities: string = './assets/data/rhone.geojson';

  constructor(private http: HttpClient) {}

  makeCitiesMarkers(map: L.Map): void {
    this.http.get(this.cities).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        console.log(lon);
        console.log(lat);
        const marker = L.marker([lat, lon]);
        
        marker.addTo(map);
      }
    });
  }
}