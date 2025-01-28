import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { RulesComponent } from './rules/rules.component';
import { PartnersComponent } from './partners/partners.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, HomeComponent, CandidatesComponent, RulesComponent, PartnersComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatButton, MatTabsModule, MatStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
