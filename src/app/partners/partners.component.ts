import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-partners',
  imports: [NgFor, MenuComponent, HttpClientModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent implements OnInit {
  partners: any[]=[];

  constructor(private usersService:UsersService) {}

  ngOnInit(): void {
    // Fetch data from the backend API
    this.getPartners();
  }

  getPartners(){
    this.usersService.listPartners()
      .subscribe(
        (data) => {
          this.partners = data
        },
        (error) => {
          console.error('Error fetching partners:', error);
        }
      );
  }
}
