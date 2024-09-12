import { Routes } from '@angular/router';
import { EmpListComponent } from './Components/emp-list/emp-list.component';
import { EmpAddComponent } from './Components/emp-add/emp-add.component';
import { EmpViewComponent } from './Components/emp-view/emp-view.component';
import { EmpEditComponent } from './Components/emp-edit/emp-edit.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "emp-list", component: EmpListComponent},
    {path: "emp-add", component: EmpAddComponent},
    {path: "emp-view/:id", component: EmpViewComponent},
    {path: "emp-edit/:id", component: EmpEditComponent},
    {path: "**", component: PageNotFoundComponent}
];
