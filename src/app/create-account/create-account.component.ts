import { Component } from '@angular/core';
import { SessionLoginService } from '../services/session-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  constructor(private monRouteur: Router, public loginService: SessionLoginService) {}

  inscription() {
    this.loginService.log = true;
    setTimeout(() => {this.monRouteur.navigateByUrl("home")}, 500);
  }
}
