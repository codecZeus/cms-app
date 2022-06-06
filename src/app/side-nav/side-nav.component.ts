import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { AuthenticationService, Credentials, CredentialsService } from '../auth';
import { routes } from './consts';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';

@Component({
  selector: 'cms-app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() iconOnly = false;

  animal: string | undefined;
  name: string | undefined;
  public currentUser: Credentials | undefined;
  public routes: typeof routes = routes;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private media: MediaObserver,
    public dialog: MatDialog
  ) {}

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.employeename : null;
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  ngOnInit() {
    this.currentUser = this.credentialsService.credentials;
  }

  signOut() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  openDialog(): void {
    this.dialog.open(ProfileEditComponent, {
      width: '630px',
      height: '390px',
    });
  }

  openUserManagement(): void {
    this.dialog.open(CustomerManagementComponent, {
      width: '630px',
      height: '190px',
    });
  }
}
