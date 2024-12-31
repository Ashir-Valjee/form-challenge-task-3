import { AbstractControl, ValidationErrors } from '@angular/forms';

export default function CardValidator(
  control: AbstractControl
): ValidationErrors | null {
  const num = control.value;

  const arr = num
    .split('')
    .reverse()
    .map((x: string) => parseInt(x));
  const lastDigit = arr.shift()!;
  let sum = arr.reduce(
    (acc: number, val: number, i: number) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0 ? null : { invalidCardNumber: true };
}
