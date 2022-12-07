import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() index = "";
  @Input() name = "";
  @Input() address = "";
  @Input() type = "";
  @Input() icon = "";
  @Input() nb = "0";

  constructor(private monRouteur: Router) {
    this.icon = this.type+".png";
  }

  showEvent(i: string) {
    setTimeout(() => {this.monRouteur.navigateByUrl("event/"+i)}, 500);
  }
}
