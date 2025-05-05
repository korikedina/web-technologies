import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

interface Crime {
  id: number;
  name: string;
}

const atLeastOneSelected: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  const array = control as FormArray;
  return array.controls.some(control => control.value) ? null : { noneSelected: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule
  ]
})
export class RegisterComponent {
  basicdata: FormGroup;
  isEditable = true;
  crimes: Crime[] = [
    { id: 1, name: 'Lopás' },
    { id: 2, name: 'Rablás' },
    { id: 3, name: 'Szexuális erőszak' },
    { id: 4, name: 'Gyilkosság' },
    { id: 5, name: 'Késeléses támadás' },
    { id: 6, name: 'Családon belüli erőszak' },
    { id: 7, name: 'Fizikai bántalmazás' },
    { id: 8, name: 'Üzleti csalás' },
    { id: 9, name: 'Emberrablás' },
    { id: 10, name: 'Rosszabb' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.basicdata = this.formBuilder.group({
      step1: this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
        gender: ['', Validators.required],
        crimes: this.formBuilder.array(
          this.crimes.map(() => new FormControl(false)),
          [atLeastOneSelected]
        )
      }),
      step2: this.formBuilder.group({
        sentenceStart: [''],
        releaseDate: ['']
      }),
      step3: this.formBuilder.group({
        bio: [''],
        profilePic: ['']
      })
    });
  }

  ngOnInit() {}

  getCheckboxControl(index: number): FormControl {
    return (this.basicdata.get('step1.crimes') as FormArray).controls[index] as FormControl;
  }

  isFieldInvalid(fieldName: string, stepName: string): boolean {
    const field = this.basicdata.get(`${stepName}.${fieldName}`);
    return field ? field.invalid && field.touched : false;
  }

  getErrorMessage(fieldName: string, stepName: string): string {
    const field = this.basicdata.get(`${stepName}.${fieldName}`);
    if (!field) return '';
    
    if (field.hasError('required')) return 'Mező kitöltése kötelező';
    if (field.hasError('minlength')) return 'Túl rövid';
    if (field.hasError('maxlength')) return 'Túl hosszú';
    return '';
  }

  isFormArrayInvalid(): boolean {
    const crimes = this.basicdata.get('step1.crimes') as FormArray;
    return crimes.hasError('noneSelected') && crimes.touched;
  }

  isFirstStepValid(): boolean {
    const step1 = this.basicdata.get('step1');
    return step1 ? step1.valid : false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.basicdata.get('step3.profilePic')?.setValue(file);
  }

  onSubmit() {
    if (this.basicdata.valid) {
      const formData = new FormData();
      const formValue = this.basicdata.value;

      // Add name (combining firstName and lastName)
      const fullName = `${formValue.step1.firstName} ${formValue.step1.lastName}`;
      formData.append('name', fullName);

      // Add motto (bio from step3)
      formData.append('motto', formValue.step3.bio || '');

      // Add photo if selected
      const profilePic = this.basicdata.get('step3.profilePic')?.value;
      if (profilePic) {
        formData.append('photo', profilePic);
      }

      // Add selected crimes
      const selectedCrimes = formValue.step1.crimes
        .map((checked: boolean, index: number) => checked ? this.crimes[index].name : null)
        .filter((name: string | null) => name !== null)
        .join(', ');
      formData.append('crimes', selectedCrimes);

      this.usersService.registerUser(formData).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Add success handling here (e.g., show success message, redirect)
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Add error handling here (e.g., show error message)
        }
      });
      this.router.navigate(['/candidates']);
    }
  }
}