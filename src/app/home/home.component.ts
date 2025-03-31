import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }

  ngOnDestroy() {
    document.body.style.overflow = ''; // Restore scrolling
  }
}
