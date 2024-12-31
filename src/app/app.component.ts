import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { Form2Component } from './components/form2/form2.component';

@Component({
  selector: 'app-root',
  imports: [Form2Component],
  template: `
    <body>
      <app-form2 />
    </body>
  `,
  styles: [
    `
      body {
        color: rgb(60, 60, 59);
        font-family: 'Calibri';
      }
    `,
  ],
})
export class AppComponent {
  title = 'task3';
}
