import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { RulesComponent } from './rules/rules.component';
import { PartnersComponent } from './partners/partners.component';
import { LikedComponent } from './liked/liked.component';

const routeConfig: Routes = [
    {
      path: '', 
      component: HomeComponent,
      title: 'BűnTárs'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Regisztráció - bűnTárs'
    },
    {
      path: 'rules',
      component: RulesComponent,
      title: 'Szabályzat - bűnTárs'
    },
    {
      path: 'candidates',
      component: CandidatesComponent,
      title: 'Jelöltek - bűnTárs'
    },
    {
      path: 'partners',
      component: PartnersComponent,
      title: 'Partnereink - bűnTárs'
    },
    {      
      path: 'liked',
      component: LikedComponent,
      title: 'Kedvelések - bűnTárs'
    },
    
  ];
  
  export default routeConfig;


