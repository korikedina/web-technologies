import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MenuComponent } from "../shared/menu/menu.component";

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, MatButtonModule, MatIconModule, MenuComponent],
  styleUrls: ['./candidates.component.css'],
  templateUrl: './candidates.component.html'
})
export class CandidatesComponent {
  candidateList = [
    {
      id: 1,
      name: 'Lakatos Ronáldó',
      moto: 'ojan aszszónyt zsretnék aki mozsfőz dagarít',
      photo: '../../assets/images/dani.jpg',
      photodisplacement:-45,
      crimes: 'Bolti lopás, rablás, fizikai bántalmazás',
    },
    {
      id: 2,
      name: 'Lármás Károly',
      moto: 'Törj ki a csendből, a sötétből, szeress szívből.',
      photo: '../../assets/images/larmaskaroly.png',
      photodisplacement:0,
      crimes: 'Üzleti csalás, emberrablás',
    },
    {
      id: 3,
      name: 'Horvát Atilla',
      moto: 'Az utca nevelt.',
      photo: '../../assets/images/horvatattila.jpg',
      photodisplacement:0,
      crimes: 'Gyilkosság, késeléses támadás',
    },
    {
      id: 4,
      name: 'Oláh Alehandró',
      moto: 'A legfontosabb, a család.',
      photo: '../../assets/images/olahalehandro.png',
      photodisplacement:0,
      crimes: 'Családon belüli erőszak, fizikai bántalmazás',
    },
    {
      id: 5,
      name: 'Pat Tamás',
      moto: 'Kutyából nem lesz szalonna',
      photo: '../../assets/images/pattamas.jpeg',
      photodisplacement:0,
      crimes: 'Rosszabb',
    },
  ];
}
