import 'zone.js/dist/zone';
import { Component, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { SecondComponent } from './second.component';
import { FirstComponent } from './first.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(MatDialogModule),
    provideRouter([
      {
        path: 'first',
        component: FirstComponent,
        canDeactivate: [
          () => inject(MatDialog).openDialogs.length === 0,
        ],
      },
      { path: 'second', component: SecondComponent },
      { path: '**', redirectTo: 'first' },
    ]),
  ],
});
