import { Component, OnInit } from '@angular/core';
import { EvtService } from '../services/evt.service';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.scss']
})
export class AddEvent2Component implements OnInit {
  name = "";
  type = "";
  date = "";
  hour = "";
  desc = "";
  nb = "";
  age = "";
  rue = "";
  ville = "";
  cp = "";
  pays = "France";
  add = "";

constructor(private monRouteur: ActivatedRoute, public evtService: EvtService, public profileService: ProfileService) {}

  ngOnInit(): void {
    this.monRouteur.queryParams
    .subscribe(params => {
    console.log(params);
    this.name = params['name'];
    this.type = params['type'];
    this.date = params['date'];
    this.hour = params['hour'];
    this.desc = params['desc'];
    this.nb = params['nb'];
    this.age = params['age'];
      });
  }

  addEvent() {
    this.evtService.events.push({"name": this.name, "type": this.type, "date": this.date, "hour": this.hour, "desc": this.desc, "nb": this.nb, "age": this.age, "rue": this.rue, "ville": this.ville, "cp": this.cp, "country": this.pays, "orga": this.profileService.myprofile[0].surname+" "+this.profileService.myprofile[0].name, "tel": this.profileService.myprofile[0].tel});
    this.evtService.myevents.push({"name": this.name, "type": this.type, "date": this.date, "hour": this.hour, "desc": this.desc, "nb": this.nb, "age": this.age, "rue": this.rue, "ville": this.ville, "cp": this.cp, "country": this.pays, "orga": this.profileService.myprofile[0].surname+" "+this.profileService.myprofile[0].name, "tel": this.profileService.myprofile[0].tel});
    this.add = "Evènement ajouté !";
  }

  geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          let params = { 
            access_key: 'df80400bcc154490aea2b52d7b0a2236',
            lat: String(lat),
            lon: String(lng)
          };
          var requestOptions = {
            method: 'GET',
          };

          fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+params['lat']+"&lon="+params['lon']+"&apiKey="+params['access_key'], requestOptions)
          .then(response => response.json())
          .then(result => {
            let coord = result.features[0].properties;
            this.rue = coord.housenumber+" "+coord.street;
            this.ville = coord.city;
            this.cp = coord.postcode;
            })
          .catch(error => console.log('error', error));
      }
      );
    }
  }
}
