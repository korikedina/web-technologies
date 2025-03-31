import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  Candidate 
    this.http.get<any[]>('/api/users')
        .subscribe(
          (data) => {
            // Map each candidate object to exclude _id
            this.candidateList = data.map(candidate => ({
              id: candidate.id,
              name: candidate.name,
              moto: candidate.moto,
              photo: candidate.photo,
              photodisplacement: candidate.photodisplacement,
              crimes: candidate.crimes
            }));
          },
          (error) => {
            console.error('Error fetching candidates:', error);
          }
        );
}
