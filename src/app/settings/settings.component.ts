import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Input() name = "";
  @Input() surname = "";
  @Input() mail = "";
  @Input() tel = "";
  @Input() password = "";

  constructor(private monRouteur: Router, public profileService: ProfileService) {}

  update() {
    if (this.name != "") {
      this.profileService.myprofile[0].name = this.name;
    }
    if (this.surname != "") {
      this.profileService.myprofile[0].surname = this.surname;
    }
    if (this.mail != "") {
      this.profileService.myprofile[0].mail = this.mail;
    }
    if (this.tel != "") {
      this.profileService.myprofile[0].tel = this.tel;
    }
    setTimeout(() => {this.monRouteur.navigateByUrl("profile")}, 500);
  }
}
