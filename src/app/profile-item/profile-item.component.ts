import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent {
  @Input() index = "";
  @Input() name = "Event 1";
  @Input() phone = "0770787997";

  constructor(private monRouteur: Router) {}

  showProfile(i: string) {
    setTimeout(() => {this.monRouteur.navigateByUrl("profile/"+i)}, 500);
  }
}
