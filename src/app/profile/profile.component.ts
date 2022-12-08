import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name = "";
  @Input() surname = "";
  @Input() mail = "";
  @Input() tel = "";
  @Input() id = 0;

  constructor(private monRouteur: Router, public profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.myprofile.push({"name": "moi", "surname": "Moi", "mail": "qeibz@fbizu.fr", "tel": "90824987"});
    this.name = this.profileService.myprofile[0].name;
    this.surname = this.profileService.myprofile[0].surname;
    this.mail = this.profileService.myprofile[0].mail;
    this.tel = this.profileService.myprofile[0].tel;
  }

  settings() {
    setTimeout(() => {this.monRouteur.navigateByUrl("profile/settings")}, 500);
  }

  events() {
    setTimeout(() => {this.monRouteur.navigateByUrl("profile/myevents")}, 500);
  }
}
