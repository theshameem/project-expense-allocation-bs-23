import { Component } from '@angular/core';

@Component({
  selector: 'app-project-expense',
  templateUrl: './project-expense.component.html',
  styleUrls: ['./project-expense.component.scss'],
})
export class ProjectExpenseComponent {
  employees: any = [];
  totalCost: number = 0;

  // employeeList: any = [
  //   {
  //     Name: 'PM',
  //     EmployeeList: [
  //       {
  //         Name: 'QA',
  //       },
  //       {
  //         Name: 'DEV',
  //       },
  //       {
  //         Name: 'PM',
  //         EmployeeList: [
  //           {
  //             Name: 'QA',
  //           },
  //           {
  //             Name: 'DEV',
  //           },
  //           {
  //             Name: 'PM',
  //             EmployeeList: [
  //               {
  //                 Name: 'QA',
  //               },
  //               {
  //                 Name: 'DEV',
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     Name: 'QA',
  //   },
  //   {
  //     Name: 'DEV',
  //   },
  // ];

  constructor() {}

  ngOnInit() {}

  resetCalculation(): void {
    console.log('Reset clicked!');
    this.employees = [];
    this.totalCost = 0;
  }

  addProjectManager(index?: number): void {
    this.employees.push({
      Name: 'PM',
      Cost: 300,
    });
    this.totalCost += 300;
  }

  addDeveloper(index?: number): void {
    this.employees.push({
      Name: 'Developer',
      Cost: 1000,
    });
    this.totalCost += 1000;
  }

  addQualityAssurance(index?: number): void {
    this.employees.push({
      Name: 'QA',
      Cost: 500,
    });
    this.totalCost += 500;
  }
}
