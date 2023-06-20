import { Component } from '@angular/core'
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  template: `
    <h2>second component</h2>
    <button mat-stroked-button routerLink='/first'>First</button>
    `,
  imports: [MatButtonModule, RouterLink],
  standalone: true
})
export class SecondComponent {

}
