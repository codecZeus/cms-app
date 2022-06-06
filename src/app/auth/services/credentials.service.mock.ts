import { Credentials } from './credentials.service';

export class MockCredentialsService {
  credentials: { employeeid: string; employeename: string } = {
    employeename: 'test',
    employeeid: '123',
  };

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: Credentials, _remember?: boolean) {
    this.credentials = credentials || null;
  }
}
