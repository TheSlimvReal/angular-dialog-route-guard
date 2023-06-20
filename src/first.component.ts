import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { DialogComponent } from './dialog.component';

@Component({
  template: `
    <h2>first component</h2>
    <button mat-stroked-button routerLink='/second'>Second</button>
    <button mat-stroked-button (click)='openDialog()'>Dialog</button>
    `,
  imports: [MatButtonModule, RouterLink],
  standalone: true,
})
export class FirstComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogComponent, { closeOnNavigation: true });
  }
}
