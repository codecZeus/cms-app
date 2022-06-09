import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerDetails } from '@app/master-management/models/master';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '@app/master-management/services/master.service';

@Component({
  selector: 'cms-app-create-Customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customerDetailForm: FormGroup;
  actionType: string;
  customerID: number;
  createCustomer: CustomerDetails;

  constructor(
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: MasterService
  ) {}

  ngOnInit(): void {
    this.actionType = this.data.actionType;
    this.customerID = this.data.customer.id;
    this.initializeForm();
  }

  initializeForm() {
    this.customerDetailForm = this.fb.group({
      customerName: new FormControl('', Validators.required),
      customerNumber: new FormControl('', Validators.required),
      customerCID: new FormControl('', Validators.required),
      simPurchasedDateTime: new FormControl('', Validators.required),
    });
    if (this.actionType === 'Edit') this.populateForm();
  }

  populateForm() {
    this.customerDetailForm.patchValue({
      customerName: this.data.customer.customerName,
      customerNumber: this.data.customer.customerNumber,
      customerCID: this.data.customer.customerCID,
      simPurchasedDateTime: this.data.customer.simPurchasedDateTime,
    });
  }
  saveCustomer() {
    if (this.customerDetailForm.valid) {
      const createCustomer = new CustomerDetails();
      Object.assign(createCustomer, this.customerDetailForm.value);
      this.dialogRef.close(createCustomer);
    } else return;
  }

  updateCustomer() {
    if (this.customerDetailForm.valid) {
      const createCustomer = new CustomerDetails();
      Object.assign(createCustomer, this.customerDetailForm.value);
      createCustomer.id = this.customerID;
      this.dialogRef.close(createCustomer);
    } else return;
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
