import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EvtService {
    events = new Array();

    addEvent(name: String,   ) {
      //this.events.push({"name": name, "address": this.address, "type": this.type, "nb": String(this.nb)});
    }

}