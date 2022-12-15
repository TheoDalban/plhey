import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ngOnInit(): void {
    document.getElementById("home")!.style.background = "#469DDE";
  }

  homeActive() {
    document.getElementById("home")!.style.background = "#469DDE";
    document.getElementById("search")!.style.background = "#efd229";
    document.getElementById("add")!.style.background = "#efd229";
    document.getElementById("map")!.style.background = "#efd229";
    document.getElementById("profile")!.style.background = "#efd229";
  }

  searchActive() {
    document.getElementById("home")!.style.background = "#efd229";
    document.getElementById("search")!.style.background = "#469DDE";
    document.getElementById("add")!.style.background = "#efd229";
    document.getElementById("carte")!.style.background = "#efd229";
    document.getElementById("profile")!.style.background = "#efd229";
  }

  addActive() {
    document.getElementById("home")!.style.background = "#efd229";
    document.getElementById("search")!.style.background = "#efd229";
    document.getElementById("add")!.style.background = "#469DDE";
    document.getElementById("carte")!.style.background = "#efd229";
    document.getElementById("profile")!.style.background = "#efd229";
  }

  mapActive() {
    document.getElementById("home")!.style.background = "#efd229";
    document.getElementById("search")!.style.background = "#efd229";
    document.getElementById("add")!.style.background = "#efd229";
    document.getElementById("carte")!.style.background = "#469DDE";
    document.getElementById("profile")!.style.background = "#efd229";
  }

  profileActive() {
    document.getElementById("home")!.style.background = "#efd229";
    document.getElementById("search")!.style.background = "#efd229";
    document.getElementById("add")!.style.background = "#efd229";
    document.getElementById("carte")!.style.background = "#efd229";
    document.getElementById("profile")!.style.background = "#469DDE";
  }
}
