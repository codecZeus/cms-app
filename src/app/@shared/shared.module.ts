import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [ConfirmationDialogComponent],
  exports: [],
})
export class SharedModule {}
