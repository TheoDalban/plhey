import { Component } from '@angular/core';
import { SessionLoginService } from '../services/session-login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  constructor(public loginService: SessionLoginService) {}

  login() {
    this.loginService.log = true;
  }
}
