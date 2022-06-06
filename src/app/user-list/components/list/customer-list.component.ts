import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from '../../../master-management/services/master.service';
import { NotificationService } from '../../../@core';
import { CustomerDetails } from '../../../master-management/models/master';
import { ConfirmationDialogComponent } from '../../../@shared/confirmation-dialog/confirmation-dialog.component';
import { CreateCustomerComponent } from '../../../master-management/components/create-user/create-customer.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private dialog: MatDialog, private router: Router, private service: MasterService) /**
   * @description for Notification
   */
  // private notificationService: NotificationService
  {}

  ngOnInit(): void {
    this.customerDetails = this.service.loadUsers();
    /**
     * @description for mat paginator
     */
    // this.getArray();
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

  /**
   * @description These moethods can be used to set-up mat paginator
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
