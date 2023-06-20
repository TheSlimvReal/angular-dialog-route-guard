import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <mat-dialog-content>
      <h2>Dialog</h2>
      <button mat-stroked-button routerLink='/second'>Second</button>
    </mat-dialog-content>
    `,
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDialogModule],
})
export class DialogComponent {}
