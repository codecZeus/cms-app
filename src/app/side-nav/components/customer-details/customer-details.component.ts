import { Component, OnInit } from '@angular/core';
import { CustomerDetails, ServiceDetails } from '../../../master-management/models/master';
import { MasterService } from '@app/master-management/services/master.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cms-app-Customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerDetail: CustomerDetails;
  customerDetailForm: FormGroup;
  serviceDetails!: ServiceDetails[];
  customer: CustomerDetails[];
  displayedColumns: string[] = ['gsmVoice', 'sms', '3G', '4G', '5G', 'eTeeru'];
  editable = false;
  model: any = {};
  value = 'na';
  public options: any = [
    {
      value: 'on',
      id: 'On',
    },
    {
      value: 'na',
      id: 'NA',
    },
    {
      value: 'off',
      id: 'Off',
    },
  ];

  constructor(private service: MasterService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerDetail = history.state.data.customer;
    this.serviceDetails = this.service.loadService();
    this.initializeForm();
  }
  onSubmit() {
    alert('S!\n\n' + JSON.stringify(this.model));
  }

  initializeForm() {
    this.customerDetailForm = this.fb.group({
      customerName: new FormControl('', Validators.required),
      customerNumber: new FormControl('', Validators.required),
      customerCID: new FormControl('', Validators.required),
      simPurchasedDateTime: new FormControl('', Validators.required),
    });
    this.populateForm();
  }

  populateForm() {
    this.customerDetailForm.patchValue({
      customerName: this.customerDetail.customerName,
      customerNumber: this.customerDetail.customerNumber,
      customerCID: this.customerDetail.customerCID,
      simPurchasedDateTime: this.customerDetail.simPurchasedDateTime,
    });
  }

  redirect() {
    this.router.navigate(['/Customer-list']);
  }

  editMode() {
    this.editable = true;
  }
  leaveEditMode() {
    this.editable = false;
  }
}
