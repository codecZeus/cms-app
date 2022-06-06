import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { Logger, UntilDestroy, untilDestroyed } from '../../@core';
import { AuthenticationService } from '../services/authentication.service';
import { Credentials } from '../index';
import { SearchCustomerComponent } from '@app/master-management/components/search-customer/search-customer.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'cms-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  usernameErr = 'username required';
  passwordErr = 'password required';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  login() {
    /**
     * @description This method can be implemented with real BD
     */
    // const login$ = new Observable<Credentials>(() => {
    //   this.authenticationService.login(this.loginForm.value);
    // });
    // login$
    //   .pipe(
    //     finalize(() => {
    //       this.loginForm.markAsPristine();
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(
    //     (credentials: { userName: any }) => {
    //       log.debug(`${credentials.userName} successfully logged in`);
    //       this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true }).then();
    //       untilDestroyed(this);
    //     },
    //     (error: string) => {
    //       log.debug(`Login error: ${error}`);
    //       this.error = error;
    //     }
    //   );

    /**
     * @description This is for matching Customer credentials with preset credentials
     */
    const log$: Credentials | null = this.authenticationService.login(this.loginForm.value);
    if (log$) {
      log.debug(`${log$.userName} successfully logged in`);
      this.router.navigate(['/Customer-list'], { state: { data: { title: marker('customer-list') } } });
    } else log.debug(`Login error: ${this.error}`);
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])?(?=.*[0-9])(?=.{8})/)]],
      remember: true,
    });
  }
}
