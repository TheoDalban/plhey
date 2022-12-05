import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionLoginService {
  log = false;
  LOGIN_URL = '/dj-ret-auth/login/';
  LOGOUT_URL = 'dj-rest-auth/logout/';
}
