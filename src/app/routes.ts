import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { RulesComponent } from './rules/rules.component';
import { PartnersComponent } from './partners/partners.component';

const routeConfig: Routes = [
    {
        path: '', 
        component: RulesComponent,
        title: 'Home Page'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register page'
    },
  ];
  
  export default routeConfig;


