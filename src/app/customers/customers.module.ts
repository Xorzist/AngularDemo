import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { FilterBoxComponent } from './customers-list/filter-box/filter-box.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [CustomersComponent]

})
export class CustomersModule { }
