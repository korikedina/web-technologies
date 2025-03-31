import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { event } from 'jquery';
import { MatStepperModule } from '@angular/material/stepper';
import { Form, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormArray } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [MatTabsModule, MatStepperModule, ReactiveFormsModule, FormsModule, NgForOf, MatButtonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  crimes = [
    { id: 1, name: 'Bolti lopás' },
    { id: 2, name: 'Rablás' },
    { id: 3, name: 'Üzleti csalás' },
    { id: 4, name: 'Fizikai bántalmazás' },
    { id: 5, name: 'Családon belüli erőszak' },
    { id: 6, name: 'Késeléses támadás' },
    { id: 7, name: 'Emberrablás' },
    { id: 8, name: 'Gyilkosság' },
    { id: 9, name: 'Szexuális erőszak' },
    { id: 10, name: 'Rosszabb' }
  ];

  isEditable: boolean = true;
  readonly firstname= new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]);
  readonly lastname= new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]);
  basicdata: FormGroup;

  constructor(private fb: FormBuilder) {
    this.basicdata = this.fb.group({
      firstName: this.firstname,
      lastName: this.lastname,
      //checkboxes: this.fb.array([], atLeastOneCheckedValidator()),
    });
  }


  ngOnInit(): void {

      $(document).ready(function() {
        
        const fname=document.querySelector("#firstname") as HTMLInputElement;
        if(fname){
          fname.addEventListener('blur', (event) =>{
            let fnameerrormsg = document.querySelector("#fnameerror") as HTMLElement;
            let fnameinp = document.querySelector("#firstname") as HTMLElement;


            if(!fname || fname.value.length < 1 || fname.value.length > 20){
              console.log(fname.parentElement)
              fnameerrormsg.hidden = false;
              fnameinp.style.borderColor="red";
            }
            else{
             fnameerrormsg.hidden=true;
             fnameinp.style.borderColor="#dee2e6"
            }
          });
        }
        const lname=document.querySelector("#lastname") as HTMLInputElement;
        if(lname){
          lname.addEventListener('blur', (event) =>{
            let lnameerrormsg = document.querySelector("#lnameerror") as HTMLElement;
            let lnameinp = document.querySelector("#lastname") as HTMLElement;

            if(!lname || lname.value.length < 1 || lname.value.length > 20){
              console.log(lname.parentElement)
              lnameerrormsg.hidden = false;
              lnameinp.style.borderColor="red";

            }
            else{
              lnameerrormsg.hidden=true;
              lnameinp.style.borderColor="#dee2e6";

            }
          });
        }
        // Például egy gomb kattintás eseményének kezelése
        $("#firstbt").click(function() {
          const firstname = (typeof $("#firstname").val() === "string" ? ($("#firstname").val() as string) : "").trim();
          const lastname = (typeof $("#lastname").val() === "string" ? ($("#lastname").val() as string) : "").trim();
          let errors=[];
          let isValid=true;
          // Validate First Name
          if (!firstname || firstname.length < 1 || firstname.length > 20) {
            isValid=false;
            errors.push("A vezetéknévnek 1 és 20 karakter között kell lennie.");
          }
          if (!lastname || lastname.length < 1 || lastname.length > 20) {
            isValid=false;
            errors.push("A keresztnévnek 1 és 20 karakter között kell lennie.");
          }
          const crimeChecked = $("input[type='checkbox']:checked").length > 0;
          if (!crimeChecked) {
              isValid = false;
              errors.push("Jelölj meg legalább egy bűncselekményt.");
          }
          if(!isValid){
            alert(errors.join('\n'));
          }
          else{
            //this.stepper.next();
          }
      });
    });
  }

}
