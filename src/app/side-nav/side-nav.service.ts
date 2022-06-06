import { Route, Routes } from '@angular/router';

import { AuthenticationGuard } from '../auth';
import { SideNavComponent } from './side-nav.component';

/**
 * Provides helper methods to create routes.
 */
export class SideNavService {
  /**
   * Creates routes using the side-nav component and authentication.
   * @param routes The routes to add.
   * @return The new route using side-nav as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: SideNavComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
    };
  }
}
