import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-menu',
  imports:[RouterModule, MatSidenavModule, MatIcon, MatToolbarModule, MatButtonModule,  MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  showMenu: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showMenu = ['/candidates', '/rules', '/partners', '/register'].includes(currentRoute);
    });
  }

  toggleSidenav() {
    this.showMenu=!this.showMenu
  }
}
