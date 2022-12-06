import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name = "Julie Délivre";
  @Input() id = 0;

  constructor(public profileService: ProfileService) {}

  ngOnInit(): void {
    this.name = this.profileService.profiles[this.id].name;
  }
}
