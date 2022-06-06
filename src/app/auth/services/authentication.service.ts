import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, CredentialsService } from './credentials.service';
import { HttpClient } from '@angular/common/http';

export interface LoginContext {
  userName: string;
  password: string;
  remember?: boolean;
}

/**
 * @description Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private data: Credentials = {
    userName: 'Admin',
    token: 'Admin@2022',
    roleid: 0o1,
    role: 'Administrative Officer',
    employeename: 'Dorji',
    employeeid: 'TD1234',
    userid: 123,
  };

  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}

  /**
   * Authenticates the Customer.
   * @param context The login parameters.
   * @return The Customer credentials.
   */
  login(context: LoginContext): Credentials | null {
    /**
     * @description This method can be implemented with real DB
     */
    // return new Observable<Credentials>((observer) => {
    // this.http
    //   .post(`${serverUrl}/authenticate`, { userName: context.userName, password: context.password })
    //   .subscribe(
    //     (response: any) => {
    //       const data = {
    //         userName: context.userName,
    //         token: response.jwt,
    //         roleid: response.Customer.roleId,
    //         role: response.Customer.role,
    //         employeename: response.Customer.employeeName,
    //         employeeid: response.Customer.employeeId,
    //         userid: response.Customer.userId,
    //       };
    //       this.credentialsService.setCredentials(data, context.remember);
    //       observer.next(response);
    //     },
    //     () => observer.error()
    //   );

    if (this.checkCredential(context.userName, context.password) === 1) {
      this.credentialsService.setCredentials(this.data, context.remember);
      return this.data;
    } else return null;
  }

  /**
   * @description This method is used to force check Customer credential
   */
  checkCredential(name: string, password: string): number {
    return name === 'Admin' && password === 'Admin2022' ? 1 : 0;
  }

  /**
   * Logs out the Customer and clear credentials.
   * @return True if the Customer was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
