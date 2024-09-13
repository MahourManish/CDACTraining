import { Routes } from '@angular/router';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerAddComponent } from './Components/customer-add/customer-add.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomerEditComponent } from './Components/customer-edit/customer-edit.component';
import { CustomerViewComponent } from './Components/customer-view/customer-view.component';

export const routes: Routes = [
    {path: '', component: CustomerListComponent},
    {path: 'customer-add', component: CustomerAddComponent},
    {path: 'customer-edit/:id', component: CustomerEditComponent},
    {path: 'customer-view/:id', component: CustomerViewComponent},
    {path: '**', component: PageNotFoundComponent}
];
