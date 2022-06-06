import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../master-management/models/master';

@Component({
  selector: 'cms-app-Customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerDetail: CustomerDetails;

  constructor() {}

  ngOnInit(): void {
    this.customerDetail = history.state.data.customer;
  }
}
