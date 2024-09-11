import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatDivider],
  templateUrl: './nav-bar.component.html',
  styles: `.example-spacer { flex: 1 1 auto;}`
})
export class NavBarComponent {
  title = "Employee Service Application";

}
