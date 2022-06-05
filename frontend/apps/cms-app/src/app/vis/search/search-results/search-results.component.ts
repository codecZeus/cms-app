import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from '../../../master-management/services/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  /**
   * @description this is for search
   */
  displayedColumns: string[] = ['patientId', 'earTagNumber', 'microchipNumber', 'id', 'animalName', 'actions'];

  /**
   * @description table Data Source
   */
  // tslint:disable-next-line:ban-types
  dataSource: MatTableDataSource<Object>;

  /**
   * @description listening to search params change
   */
  searchParamsChange = false;

  /**
   * @description To get registered details
   */
  registeredDetails: any;

  /**
   * @description see search details of
   */
  seeDetails = false;

  /**
   * @description This is for storing search data from search form
   */
  @Input() searchDetails: any;
  det: any = [];
  // tslint:disable-next-line:ban-types
  searchResults: Object = [];
  loaded = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private service: MasterService) {}

  ngOnInit() {
    this.det = this.searchDetails;
    this.setTable();
    // this.setTable(this.searchDetails['registrationId']);
  }

  /**
   * @description This will redirect to the detailed page of a registered patient
   * @param registrationId: number
   * @return void
   */
  viewDetails(registrationId: number): void {
    this.service.getRegisteredDetails(registrationId).subscribe((res) => {
      try {
        this.registeredDetails = res;
        this.seeDetails = true;
      } catch (error) {}
    });
  }

  setPaginator() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 200);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createdDisplayComlumn(obj: {}) {
    this.displayedColumns = [];
    Object.keys(obj).forEach((key, index) => {
      this.displayedColumns.push(key);
    });
  }
  setTable() {

    // this.service.getRegisteredDetails(registrationId).subscribe(data => {
    //   this.loaded =false;
    //   this.searchResults = data;
    //   this.createdDisplayComlumn(this.searchResults[0]);
    //
    //   this.dataSource = new MatTableDataSource(this.searchResults[0]);
    //   this.setPaginator();
    //   this.loaded =true;
    // })
    // this.dataSource.data = this.det;
    this.setPaginator();
    console.log('data is  ' + this.dataSource);
  }
}
