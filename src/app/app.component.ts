import { Component } from '@angular/core';
import { SessionLoginService } from './services/session-login.service';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Plhey';
  //todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  //inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  //done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;

  constructor(private monRouteur: Router, public loginService: SessionLoginService, private store: Firestore) {
    this.monRouteur.navigate(['']);
  }
}
