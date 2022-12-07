import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name = "Julie Délivre";
  @Input() id = 0;
  @Input() phone = "0770787997";

  constructor(private monRouteur: Router, public profileService: ProfileService) {}

  ngOnInit(): void {
  }

  settings() {
    console.log("settings");
    setTimeout(() => {this.monRouteur.navigateByUrl("profile/settings")}, 500);
  }
}
