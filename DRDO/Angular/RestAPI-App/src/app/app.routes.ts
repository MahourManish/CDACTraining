import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmpAddComponent } from './Components/emp-add/emp-add.component';
import { EmpEditComponent } from './Components/emp-edit/emp-edit.component';
import { EmpListComponent } from './Components/emp-list/emp-list.component';
import { EmpViewComponent } from './Components/emp-view/emp-view.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { TemplateFormComponent } from './Components/template-form/template-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { StateMgmtComponent } from './Components/state-mgmt/state-mgmt.component';

export const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "state-mgmt", component: StateMgmtComponent},
    {path: "template-form", component: TemplateFormComponent},
    {path: "reactive-form", component: ReactiveFormComponent},
    {path: "**", component: PageNotFoundComponent},
    {path: "emp-add", component: EmpAddComponent},
    {path: "emp-edit/:id", component: EmpEditComponent},
    {path: "emp-list", component: EmpListComponent},
    {path: "emp-view/:id", component: EmpViewComponent},
];
