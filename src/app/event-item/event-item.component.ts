import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() index = "";
  @Input() name = "Event 1";
  @Input() address = "Event 1";
  @Input() type = "Event 1";
  @Input() nb = "0";

  constructor(private monRouteur: Router) {}

  showEvent(i: string) {
    setTimeout(() => {this.monRouteur.navigateByUrl("event/"+i)}, 500);
  }
}
