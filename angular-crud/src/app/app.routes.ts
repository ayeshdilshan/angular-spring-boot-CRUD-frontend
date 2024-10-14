import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Eager loaded component
  {
    path: 'employees/add',
    loadComponent: () =>
      import('./employees/employee-form/employee-form.component').then(
        (m) => m.EmployeeFormComponent
      ),
  }, // Lazy-loaded standalone component
  {
    path: 'departments',
    loadComponent: () =>
      import('./departments/departments.component').then(
        (m) => m.DepartmentsComponent
      ),
  }, // Lazy-loaded standalone component
  {
    path: 'about',
    loadComponent: () =>
      import('./departments/departments.component').then(
        (m) => m.DepartmentsComponent
      ),
  }, // Lazy-loaded standalone component
  {
    path: 'contact',
    loadComponent: () =>
      import('./departments/departments.component').then(
        (m) => m.DepartmentsComponent
      ),
  }, // Lazy-loaded standalone component
];
