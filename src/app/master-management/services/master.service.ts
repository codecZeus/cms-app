import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CUSTOMER_DETAIL, CustomerDetails, SERVICE_DETAIL, ServiceDetails } from '../models/master';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private customerDetails: CustomerDetails[] = CUSTOMER_DETAIL;
  private serviceDetails: ServiceDetails[] = SERVICE_DETAIL;

  constructor(private http: HttpClient) {}

  public loadCustomers(): CustomerDetails[] {
    // return new Observable<CreateUser[]>((observer) => {
    //   this.http.get<CreateUser[]>(`${environment.serverUrl}/userDtls/`, this.httpOptions).subscribe(
    //     (response) => {
    //       console.log(response);
    //       observer.next(response);
    //     }
    //   );
    // });
    return this.customerDetails;
  }

  public loadService(): ServiceDetails[] {
    // return new Observable<CreateUser[]>((observer) => {
    //   this.http.get<CreateUser[]>(`${environment.serverUrl}/userDtls/`, this.httpOptions).subscribe(
    //     (response) => {
    //       console.log(response);
    //       observer.next(response);
    //     }
    //   );
    // });
    return this.serviceDetails;
  }

  public deleteCustomer(id: number) {
    /**
     * @description post request to BE to delete a customer
     */
    // return this.http.post(`${environment.serverUrl}/customerDtls/${id}/delete`, this.httpOptions);
  }

  public saveCustomer(createCustomer: CustomerDetails) {
    /**
     * @description post request to BE to save a customer
     */
    // return this.http.post(`${environment.serverUrl}/customerDtls/`, createCustomer, this.httpOptions);
  }

  fetchCustomerDetail(id: number): CustomerDetails {
    return this.customerDetails[id];
  }
}
