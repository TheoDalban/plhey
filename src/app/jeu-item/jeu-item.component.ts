import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeu-item',
  templateUrl: './jeu-item.component.html',
  styleUrls: ['./jeu-item.component.scss']
})
export class JeuItemComponent {
  @Input() index = "";
  @Input() name = "";

  constructor(private monRouteur: Router) {
  }

  ngOnInit(): void {
  }

  voir() {
    setTimeout(() => {this.monRouteur.navigateByUrl("jeu/"+this.name)}, 500);
  }
}
