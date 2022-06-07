import { Component, OnInit } from '@angular/core';
import { CustomerDetails, ServiceDetails } from '../../../master-management/models/master';
import { MasterService } from '@app/master-management/services/master.service';

@Component({
  selector: 'cms-app-Customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerDetail: CustomerDetails;
  serviceDetails!: ServiceDetails[];
  customer: CustomerDetails[];
  displayedColumns: string[] = ['gsmVoice', 'sms', '3G', '4G', '5G', 'eTeeru'];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.customerDetail = history.state.data.customer;
    this.serviceDetails = this.service.loadService();
  }
}
