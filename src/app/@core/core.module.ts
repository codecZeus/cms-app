import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterModule, MaterialModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    DatePipe,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
