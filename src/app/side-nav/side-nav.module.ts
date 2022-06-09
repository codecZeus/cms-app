import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { AuthModule } from '../auth';
import { SideNavComponent } from './side-nav.component';
import { CustomerComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';
import { CustomerDetailsComponent } from '@app/side-nav/components/customer-details/customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SideNavComponent,
    CustomerComponent,
    ProfileEditComponent,
    CustomerManagementComponent,
    CustomerDetailsComponent,
  ],
})
export class SideNavModule {}
