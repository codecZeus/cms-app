import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { SideNavService } from '../side-nav/side-nav.service';
import { CreateCustomerComponent } from './components/create-user/create-customer.component';
import { SearchCustomerComponent } from '@app/master-management/components/search-customer/search-customer.component';

const routes: Routes = [
  SideNavService.childRoutes([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'createCustomer', component: CreateCustomerComponent, data: { title: marker('create-customer') } },
    { path: 'search', component: SearchCustomerComponent, data: { title: marker('search') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
