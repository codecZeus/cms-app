import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavService } from '../side-nav/side-nav.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CustomerListComponent } from './components/list/customer-list.component';
import { CreateCustomerComponent } from '../master-management/components/create-user/create-customer.component';
import { CustomerDetailsComponent } from '@app/side-nav/components/customer-details/customer-details.component';

const routes: Routes = [
  SideNavService.childRoutes([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'Customer-list', component: CustomerListComponent, data: { title: marker('Customer list') } },
    { path: 'customerDetails', component: CustomerDetailsComponent },
    { path: 'createUser', component: CreateCustomerComponent, data: { title: marker('CreateUser') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
