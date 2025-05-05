import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from './candidates';
import { Partner } from './partners';
import { HttpClient, HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  listCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>('/api/users');
  }

  listPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>('/api/organizations');
  }

  registerUser(formData: FormData) {
    return this.http.post<any>('/api/users', formData);
  }

  addLike(id: string) {
    const likedUserIds: string[] = this.getLikedUsers();
    if (!likedUserIds.includes(id)) {
      likedUserIds.push(id);
      localStorage.setItem('likedUsers', JSON.stringify(likedUserIds));
    }
    return of({ success: true }); 
  }

  removeLike(id: string) {
    const likedUserIds: string[] = this.getLikedUsers();
    const updatedLikes = likedUserIds.filter(userId => userId !== id);
    localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
    return of({ success: true }); 
  }

  public getLikedUsers(): string[] {
    const stored = localStorage.getItem('likedUsers');
    return stored ? JSON.parse(stored) : [];
  }
 
}