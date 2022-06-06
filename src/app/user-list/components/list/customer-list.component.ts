import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from '../../../master-management/services/master.service';
import { NotificationService } from '../../../@core';
import { CustomerDetails } from '../../../master-management/models/master';
import { ConfirmationDialogComponent } from '../../../@shared/confirmation-dialog/confirmation-dialog.component';
import { CreateCustomerComponent } from '../../../master-management/components/create-user/create-customer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-app-Customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customerDetails!: CustomerDetails[];
  customer: CustomerDetails[];
  public refreshData$ = new BehaviorSubject<boolean>(false);

  displayedColumns: string[] = [
    'slNo',
    'customerName',
    'customerNumber',
    'customerCID',
    'simPurchasedDate&Time',
    'edit',
    'delete',
  ];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private service: MasterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.customerDetails = this.service.loadUsers();
  }

  editCustomer(id: number) {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '700px',
      data: {
        actionType: 'EDIT',
        id,
      },
    });
    // dialogRef.afterClosed().subscribe((result: CustomerDetails) => {
    //   if (result) {
    //     this.addUsers(result);
    //   }
    // });
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to delete the selected item?',
      },
    });
    dialogRef.afterClosed().subscribe((result: CustomerDetails) => {
      if (result) {
        /**
         * @description BE binding
         */
        // this.service.deleteCustomer(id).subscribe(
        //   () => {
        //     this.notificationService.openSuccessSnackBar('Selected User deleted successfully');
        //     this.refreshData$.next(true);
        //   },
        //   () => {
        //     this.notificationService.openErrorSnackBar('User couldnot be delete, try again');
        //   }
        // );
      }
    });
  }

  openAddModal() {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '800px',
      data: {
        actionType: 'ADD',
        id: '',
      },
    });
    dialogRef.afterClosed().subscribe((result: CustomerDetails) => {
      if (result) {
        this.addUsers(result);
      }
    });
  }

  addUsers(createUser: CustomerDetails) {
    /**
     * @description BE binding
     */
    // this.service.saveCustomer(createUser).subscribe(
    //   () => {
    //     this.notificationService.openSuccessSnackBar('User successfully added');
    //     this.refreshData$.next(true);
    //   },
    //   () => {
    //     this.notificationService.openErrorSnackBar('User details could not be saved, please try again');
    //   }
    // );
  }

  redirect(id: number) {
    const customer: CustomerDetails = this.service.fetchCustomerDetail(id);
    this.router.navigate(['/customerDetails'], { state: { data: { customer } } });
  }
}
