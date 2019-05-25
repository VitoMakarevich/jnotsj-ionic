import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routerValues = {
    notificationManagement: {
        notificationsList: 'notification'
    },
    authModule: {
        root: 'auth',
        signIn: 'auth/sign-in'
    },
    root: '',
}

const routes: Routes = [
    {path: routerValues.root, pathMatch: 'full', redirectTo: routerValues.notificationManagement.notificationsList},
  { path: routerValues.authModule.root, loadChildren: './auth/auth.module#AuthModule' },
  {
      path: routerValues.notificationManagement.notificationsList,
      loadChildren: './notification-management/notification-management.module#NotificationManagementModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routes = routerValues
}
