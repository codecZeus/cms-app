import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from '../../../master-management/services/master.service';
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
  /**
   * @description for mat paginator
   */
  // public array: any;
  // public displayedColumn = ['', '', '', '', ''];
  // public dataSource: any;
  // public pageSize = 10;
  // public currentPage = 0;
  // public totalSize = 0;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  customerDetails!: CustomerDetails[];
  customer: CustomerDetails[];
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
    private service: MasterService // private notificationService: NotificationService
  ) /**
   * @description for Notification
   */
  {}

  ngOnInit(): void {
    this.customerDetails = this.service.loadCustomers();
    /**
     * @description for mat paginator
     */
    // this.getArray();
  }

  editCustomer(customer: CustomerDetails) {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '800px',
      data: {
        actionType: 'Edit',
        customer,
      },
    });
    dialogRef.afterClosed().subscribe((result: CustomerDetails) => {
      if (result) {
        const clone = JSON.parse(JSON.stringify(this.customerDetails));
        clone.splice(this.customerDetails.indexOf(customer), 0, result);
        this.customerDetails = clone;
      }
    });
  }

  deleteCustomer(customer: CustomerDetails) {
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
         * @description This will delete a customer
         */
        const clone = JSON.parse(JSON.stringify(this.customerDetails));
        clone.splice(this.customerDetails.indexOf(customer), 1);
        this.customerDetails = clone;
        /**
         * @description BE binding
         */
        // this.service.deleteCustomer(id).subscribe(
        //   () => {
        //     this.notificationService.openSuccessSnackBar('Selected User deleted successfully');
        //     this.refreshData$.next(true);
        //   },
        //   () => {
        //     this.notificationService.openErrorSnackBar('User couldn't be delete, try again');
        //   }
        // );
      }
    });
  }

  openAddModal() {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '800px',
      data: {
        actionType: 'Add New',
        customer: '',
      },
    });
    dialogRef.afterClosed().subscribe((result: CustomerDetails) => {
      if (result) {
        const clone = JSON.parse(JSON.stringify(this.customerDetails));
        clone.splice(this.customerDetails.length, 0, result);
        this.customerDetails = clone;
        /**
         * with real BE
         */
        // this.addCustomers(result)
      }
    });
  }

  redirect(customer: CustomerDetails) {
    this.router.navigate(['/customerDetails'], { state: { data: { customer } } });
  }

  /**
   * @description this will be called when real DB is implemented
   */
  // addCustomers(createUser: CustomerDetails) {
  // /**
  //  * @description BE binding
  //  */
  // this.service.saveCustomer(createUser).subscribe(
  //   () => {
  //     this.notificationService.openSuccessSnackBar('User successfully added');
  //     this.refreshData$.next(true);
  //   },
  //   () => {
  //     this.notificationService.openErrorSnackBar('User details could not be saved, please try again');
  //   }
  // );
  // }

  /**
   * @description These methods can be used to set up mat paginator
   */
  // public handlePage(e: any) {
  //   this.currentPage = e.pageIndex;
  //   this.pageSize = e.pageSize;
  //   this.iterator();
  // }
  //
  // private getArray() {
  //       this.dataSource = new MatTableDataSource<Element>(this.customerDetails);
  //       this.dataSource.paginator = this.paginator;
  //       this.array = this.customerDetails;
  //       this.totalSize = this.array.length;
  //       this.iterator();
  // }
  //
  // private iterator() {
  //   const end = (this.currentPage + 1) * this.pageSize;
  //   const start = this.currentPage * this.pageSize;
  //   this.dataSource = this.array.slice(start, end);
  // }
}
