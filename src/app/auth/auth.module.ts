import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login-component/login.component';
import { SharedModule } from '../@shared';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
