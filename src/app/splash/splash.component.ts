import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  constructor(private monRouteur: Router) {}

  ngOnInit(): void {
    setTimeout(() => {this.monRouteur.navigateByUrl("/login")}, 4000);
  }
}
