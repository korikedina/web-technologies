import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Partner{
  id: number,
  name: string,
  adress: string, 
  website: string
}

@Component({
  selector: 'app-partners',
  imports: [NgFor, MenuComponent, HttpClientModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent implements OnInit {
  partners: any[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from the backend API
    this.http.get<any[]>('/api/organizations')
      .subscribe(
        (data) => {
          // Map each partner object to exclude _id
          this.partners = data.map(partner => ({
            id: partner.id,
            name: partner.name,
            address: partner.address,
            website: partner.website
          }));
        },
        (error) => {
          console.error('Error fetching partners:', error);
        }
      );
  }
}
