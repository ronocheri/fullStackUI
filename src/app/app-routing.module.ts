import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmplyeesListComponent } from './components/employees/emplyees-list/emplyees-list.component';

const routes: Routes = [
  {
    path:'',
    component: EmplyeesListComponent
  },
  {
    path:'employees',
    component: EmplyeesListComponent
  }
  ,
  {
    path:'employee/add',
    component: AddEmployeeComponent
  }
  ,
  {
    path:'employees/edit/:id',
    component: EditEmployeeComponent
  }
  ,
  {
    path:'employees/delete/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
