import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  ngOnInit(): void {
    console.log('employee works');
  }

}
