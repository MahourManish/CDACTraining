import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <h1>
      Page Not Found
    </h1>
    <button mat-fab extended color="mat-primary" routerLink="/">Go Home</button>
  `,
  styles: ``
})
export class PageNotFoundComponent {

}
