import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { MenuComponent } from "../shared/menu/menu.component";
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CandidatesComponent } from '../candidates/candidates.component';
import { NgFor, NgIf } from '@angular/common';
import { Candidate } from '../candidates';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-liked',
  imports: [MenuComponent, MatCardModule, MatIcon, NgIf, NgFor, MatButtonModule],
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css', '../candidates/candidates.component.css'],
})
export class LikedComponent {
  likedIds: string[]=[];
  encodeURI = encodeURI; 
  likedUsers: Candidate[] = [];  // Changed to Candidate[]
  constructor(private usersService: UsersService) {}  // <-- Inject HttpClient

  ngOnInit() {
    this.likedIds = JSON.parse(localStorage.getItem('likedUsers') || '[]');
    this.usersService.listCandidates().subscribe(allCandidates => {
      this.likedUsers = allCandidates.filter(c => this.likedIds.includes(c.id));
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
