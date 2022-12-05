import { Component } from '@angular/core';
import { SessionLoginService } from '../services/session-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  constructor(private monRouteur: Router, public loginService: SessionLoginService) {}

  login() {
    this.loginService.log = true;
    setTimeout(() => {this.monRouteur.navigateByUrl("home")}, 500);
  }
}
