import {
  Component,
  ViewChild,
  ElementRef,
  NgModule,
  signal,
  input,
} from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // @ViewChild('formName') formName: ElementRef;
  // @ViewChild('formEmail') formEmail: ElementRef;
  // @ViewChild('card') card: ElementRef;
  // @ViewChild('inputForm') inputForm: ElementRef;
  name = '';
  email = '';
  cardNumber = '';

  onInputTest(): void {
    console.log(this.email);
  }

  validateCard(): boolean {
    const num = this.cardNumber;

    const arr = num
      .split('')
      .reverse()
      .map((x) => parseInt(x));
    const lastDigit = arr.shift()!;
    let sum = arr.reduce(
      (acc, val, i) =>
        i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.name);
    window.location.href = `mailto:test@dn-uk.com?subject=test&body=This%20is%20a%20test%20email%20for%0AName%3A%20${this.name}%0AEmail%3A%20${this.email}%0ACard%3A%20${this.cardNumber}`;
  }
}
