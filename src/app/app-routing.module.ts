import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { RulesComponent } from './rules/rules.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
