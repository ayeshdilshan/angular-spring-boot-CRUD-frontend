import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employees/employee-form/employee-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openSaveDialog() {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
    });

}
}
