import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule} from 'primeng/toast'
import { MenubarModule} from 'primeng/menubar'


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatDivider, ToolbarModule, ButtonModule, SplitButtonModule, MenubarModule, ToastModule],
  templateUrl: './nav-bar.component.html',
  styles: `.example-spacer { flex: 1 1 auto;}`
})
export class NavBarComponent implements OnInit {
  title = "Employee Service Application";
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/'},
      {label: 'Employee List', icon: 'pi pi-list', routerLink: '/emp-list'},
      {label: 'Add Employee', icon: 'pi pi-plus-circle', routerLink: '/emp-add'},
      {label: 'State Management', icon: 'pi pi-shop', routerLink: '/state-mgmt'},
      {label: 'Template Form', icon: 'pi pi-list', routerLink: '/template-form'},
      {label: 'Reactive Form', icon: 'pi pi-list', routerLink: '/reactive-form'},
    ]
  }

}
