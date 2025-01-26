import { Routes } from '@angular/router';
import { RegisterComponent } from './register';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';

const routeConfig: Routes = [
    {
        path: '', 
        component: CandidatesComponent,
        title: 'Home Page'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register page'
    },
  ];
  
  export default routeConfig;


