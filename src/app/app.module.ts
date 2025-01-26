import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, RegisterComponent, HomeComponent, CandidatesComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatButton],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
