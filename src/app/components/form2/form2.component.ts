import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import CardValidator from '../../validators/card-validator.validator';

@Component({
  selector: 'app-form2',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css',
})
export class Form2Component {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      formName: ['', [Validators.required]],
      formEmail: ['', [Validators.required, Validators.email]],
      formCard: ['', [Validators.required, CardValidator]],
    });
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    if (this.userForm.valid) {
      console.log(this.userForm.value.formName);
      window.location.href = `mailto:test@dn-uk.com?subject=test&body=This%20is%20a%20test%20email%20for%0AName%3A%20${this.userForm.value.formName}%0AEmail%3A%20${this.userForm.value.formEmail}%0ACard%3A%20${this.userForm.value.formCard}`;
    } else {
      console.log('form invalid');
    }
  }
}
