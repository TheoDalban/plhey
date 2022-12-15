import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
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
  @Input() date = "";
  @Input() password1 = "";
  @Input() password2 = "";
  constructor(private monRouteur: Router, public loginService: LoginService, public profileService: ProfileService) {}

  inscription() {
    this.profileService.myprofile.push({"name": this.name, "surname": this.surname, "mail": this.mail, "tel": this.tel, "password": this.password1});
    setTimeout(() => {this.monRouteur.navigateByUrl("create/jeu")}, 500);
  }
}
