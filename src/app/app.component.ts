import { Component, Input } from '@angular/core';
import { SessionLoginService } from './services/session-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Plhey';

  constructor(public loginService: SessionLoginService) {}
}
