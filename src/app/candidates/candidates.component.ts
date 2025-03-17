import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // <-- Import HttpClient
import { MenuComponent } from '../shared/menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-candidates',
  imports:[MenuComponent, MatCardModule, MatIcon], 
  styleUrls: ['./candidates.component.css'],
  templateUrl: './candidates.component.html',
  standalone: true,
  providers: [HttpClient] 
})
export class CandidatesComponent implements OnInit {
  candidateList: any[] = [];  // <-- Store the fetched data here

  constructor(private http: HttpClient) {}  // <-- Inject HttpClient

  ngOnInit(): void {
    // Fetch data from the backend API
    this.http.get<any[]>('http://localhost:3000/api/candidates')  // <-- Your backend URL
      .subscribe(
        (data) => {
          this.candidateList = data;  // <-- Assign the response data to candidateList
        },
        (error) => {
          console.error('Error fetching candidates:', error);  // <-- Handle errors
        }
      );
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
