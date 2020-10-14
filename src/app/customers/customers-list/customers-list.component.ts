import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
  private customerList: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  @Input() get CustomerList(): ICustomer[] {

    return this.customerList;
  }
   set CustomerList(value: ICustomer[]){
    if (value){
      this.filteredCustomers = this.customerList = value;
      this.CalculateOrders();

    }

  }


  constructor() { }

  ngOnInit(): void {

  }

  CalculateOrders(): void{
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;

    });

  }

  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.CustomerList.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
    } else {
        this.filteredCustomers = this.customerList;
    }
    this.CalculateOrders();
}
  // A sorter service handles the sorting
  sort(prop : string){

  }


}
