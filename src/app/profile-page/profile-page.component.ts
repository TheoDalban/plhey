import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  @Input() name = "";
  @Input() id = 0;
  @Input() tel = "";

  constructor(private monActRouteur: ActivatedRoute,public profileService: ProfileService) {}

  ngOnInit(): void {
    this.id = parseInt(this.monActRouteur.snapshot.params['id']);
    this.name = this.profileService.profiles[this.id].name;
    this.tel = this.profileService.profiles[this.id].tel;
  }
}
