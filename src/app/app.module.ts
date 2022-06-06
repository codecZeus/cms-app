import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoreModule } from './@core';
import { SharedModule } from './@shared';
import { SideNavModule } from './side-nav/side-nav.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListModule } from './user-list/user-list.module';
import { MasterModule } from './master-management/master.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    SideNavModule,
    UserListModule,
    MasterModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
