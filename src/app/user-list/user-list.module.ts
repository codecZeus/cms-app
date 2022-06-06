import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListRoutingModule } from './user-list-routing.module';
import { CustomerListComponent } from './components/list/customer-list.component';
import { SideNavModule } from '@app/side-nav/side-nav.module';

@NgModule({
  declarations: [CustomerListComponent],

  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    UserListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SideNavModule,
  ],
})
export class UserListModule {}
