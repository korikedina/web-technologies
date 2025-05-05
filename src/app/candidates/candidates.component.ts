import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-candidates',
  imports:[MenuComponent, MatCardModule, MatIcon, NgFor, NgIf, HttpClientModule, MatButtonModule ], 
  styleUrls: ['./candidates.component.css'],
  templateUrl: './candidates.component.html',
  standalone: true,
})
export class CandidatesComponent implements OnInit {
  readonly encodeURI = encodeURIComponent;
  candidateList: any[] = [];  // <-- Store the fetched data here
  likedIds: string[] = JSON.parse(localStorage.getItem('likedUsers') || '[]');

  constructor(private usersService:UsersService) {}  // <-- Inject HttpClient

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(){
    this.usersService.listCandidates().subscribe(data => {
     this.candidateList=data
    }, (err) => {
      console.error('Error fetching candidates:', err);
    });
  }

  like(id: string): void {
    const isLiked = this.likedIds.includes(id);
    if (isLiked) {
      this.likedIds = this.likedIds.filter(likedId => likedId !== id);
      this.usersService.removeLike(id).subscribe(() => {
        console.log('Like removed successfully!');
        localStorage.setItem('likedUsers', JSON.stringify(this.likedIds));
      });
    } else {
      this.likedIds.push(id);
      this.usersService.addLike(id).subscribe(() => {
        console.log('Like added successfully!');
        localStorage.setItem('likedUsers', JSON.stringify(this.likedIds));
      });
    }
  }
}