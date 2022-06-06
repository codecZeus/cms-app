import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MasterRoutingModule } from './master-routing.module';
import { CreateCustomerComponent } from './components/create-user/create-customer.component';
import { SearchCustomerComponent } from '@app/master-management/components/search-customer/search-customer.component';

@NgModule({
  declarations: [CreateCustomerComponent, SearchCustomerComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MasterRoutingModule,
  ],
})
export class MasterModule {}
