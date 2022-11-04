import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-emplyees-list',
  templateUrl: './emplyees-list.component.html',
  styleUrls: ['./emplyees-list.component.css']
})
export class EmplyeesListComponent implements OnInit {

  employees:Employee[]=[]
  // employees:Employee[]=[
  //   {
  //     id:'1',
  //     name:'Ron',
  //     email:'rono@gmail.com',
  //     phone:544483714,
  //     salary:345,
  //     department:'IT'
  //   },

  //   {
  //     id:'2',
  //     name:'Sean',
  //     email:'sean@gmail.com',
  //     phone:544483716,
  //     salary:378,
  //     department:'IT'
  //   },
  //   {
  //     id:'3',
  //     name:'Mor',
  //     email:'mor@gmail.com',
  //     phone:7544483714,
  //     salary:2345,
  //     department:'HR'
  //   }


  // ]
  constructor(private employeesService : EmployeesService) { }

  ngOnInit(): void {
    //this.employees=[] - wanted to make the array empty
    this.employeesService.getAllEmployees().subscribe(
      {
        next:(employees)=>
        {
          this.employees=employees
          //console.log(employees)
        },
        error:(response)=>{
          console.log(response)
        }
      }
    )
  }

 
}
