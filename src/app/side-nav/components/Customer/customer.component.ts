import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Credentials } from '../../../auth';

@Component({
  selector: 'cms-app-Customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  @Input() user: Credentials | undefined;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();

  public signOutEmit(): void {
    this.signOut.emit();
  }

  get username(): string | null {
    const credentials = this.user;
    return credentials ? credentials.userName : null;
  }
}
