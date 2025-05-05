import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { RulesComponent } from './rules/rules.component';
import { PartnersComponent } from './partners/partners.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
