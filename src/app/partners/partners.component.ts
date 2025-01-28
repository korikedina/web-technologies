import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";

@Component({
  selector: 'app-partners',
  imports: [NgFor, MenuComponent],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  partners = [
    { id: 1, name: 'Budapesti Büntetés-végrehajtási Intézet', address: 'Budapest, Nagy Ignác u. 5-11.', website: 'https://bv.gov.hu/' },
    { id: 2, name: 'Szegedi Fegyház és Börtön', address: 'Szeged, Fonógyári út 5.', website: 'https://bv.gov.hu/' },
    { id: 3, name: 'Közép-Dunántúli Országos Büntetés-végrehajtási Intézet', address: 'Székesfehérvár, Béla út 8.', website: 'https://bv.gov.hu/' },
    { id: 4, name: 'Pálhalmai Országos Büntetés-végrehajtási Intézet', address: 'Dunaújváros, Pálhalma', website: 'https://bv.gov.hu/' },
  ];
}
