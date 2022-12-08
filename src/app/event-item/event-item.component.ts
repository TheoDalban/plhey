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
  @Input() type = "";
  @Input() date = "";
  @Input() hour = "";
  @Input() desc = "";
  @Input() nb = "";
  @Input() age = "";
  @Input() rue = "";
  @Input() ville = "";
  @Input() cp = "";
  icon = "";

  constructor(private monRouteur: Router) {
    this.icon = this.type+".png";
  }

  ngOnInit(): void {
  }

  showEvent(i: string) {
    setTimeout(() => {this.monRouteur.navigateByUrl("event/"+i)}, 500);
  }
}
