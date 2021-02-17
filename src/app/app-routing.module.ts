import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartemntDetailComponent } from './departemnt-detail/departemnt-detail.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/employee',pathMatch:'full'},
  {
    path:'department/:id',component:DepartemntDetailComponent,
 children: [
   {path:'overview',component:DepartmentOverviewComponent},
   {path:'contact',component:DepartmentContactComponent}

 ]
},
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent,
},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
