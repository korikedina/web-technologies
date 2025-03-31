import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

interface Candidate {
  id: number;
  name: string;
  moto: string;
  photo: string;
  photodisplacement: string;
  crimes: string;
}

@Component({
  selector: 'app-candidates',
  imports:[MenuComponent, MatCardModule, MatIcon, NgFor, NgIf, HttpClientModule, MatButtonModule ], 
  styleUrls: ['./candidates.component.css'],
  templateUrl: './candidates.component.html',
  standalone: true,
})
export class CandidatesComponent implements OnInit {
  candidateList: any[] = [];  // <-- Store the fetched data here

  constructor(private http: HttpClient) {}  // <-- Inject HttpClient

  ngOnInit(): void {
    // Fetch data from the backend API
    
  }

  like(id: number): void {
    // Your like button logic (no changes)
    let child = $(`#like-${id}`).children()[1];
    if (child.classList.contains('favicon')) {
      child.classList.remove('favicon');
    } else {
      child.classList.add('favicon');
    }
  }
}
