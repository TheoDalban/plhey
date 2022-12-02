import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  @Input() events: Array<String> = ["event1", "event2"];
  @Input() people: Array<String> = ["people1", "people2"];
}
