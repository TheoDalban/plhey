import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-amis-add',
  templateUrl: './amis-add.component.html',
  styleUrls: ['./amis-add.component.scss']
})
export class AmisAddComponent {
  constructor(private monRouteur: Router, public loginService: LoginService) {}
  
  inscription() {
    this.loginService.log = true;
    setTimeout(() => {this.monRouteur.navigateByUrl("home")}, 500);
  }
}
