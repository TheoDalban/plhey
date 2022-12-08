import { Component, Input } from '@angular/core';
import { SessionLoginService } from '../services/session-login.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  @Input() name = "";
  @Input() surname = "";
  @Input() mail = "";
  @Input() tel = "";
  @Input() password = "";
  constructor(private monRouteur: Router, public loginService: SessionLoginService, public profileService: ProfileService) {}

  inscription() {
    this.loginService.log = true;
    this.profileService.myprofile.push({"name": this.name, "surname": this.surname, "mail": this.mail, "tel": this.tel, "password": this.password});
  }
}
