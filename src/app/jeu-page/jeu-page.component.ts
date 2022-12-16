import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvtService } from '../services/evt.service';

@Component({
  selector: 'app-jeu-page',
  templateUrl: './jeu-page.component.html',
  styleUrls: ['./jeu-page.component.scss']
})
export class JeuPageComponent {
  @Input() name = "";
  @Input() type = "ambiance";

  constructor(private monActRouteur: ActivatedRoute, private monRouteur: Router, public evtService: EvtService) {}

  ngOnInit(): void {
    this.name = this.monActRouteur.snapshot.params['id'];
  }
}
