import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  constructor(private monRouteur: Router, public loginService: LoginService) {}

  login() {
    this.loginService.log = true;
    setTimeout(() => {this.monRouteur.navigateByUrl("home")}, 500);
  }

  create() {
    setTimeout(() => {this.monRouteur.navigateByUrl("create")}, 500);
  }
}
