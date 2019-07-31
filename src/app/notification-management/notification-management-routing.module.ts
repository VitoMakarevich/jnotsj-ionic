import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';
import {NotificationsListPage} from './notifications-list/container/notifications-list.container';
import {AddNotificationPage} from './add-notification/container/add-notification.container';

export const routePaths = {
    list: '',
    create: 'create',
}
const routes: Routes = [
    {
        path: routePaths.list,
        component: NotificationsListPage,
        canActivate: [AuthGuard],
    },
    {
        path: routePaths.create,
        component: AddNotificationPage,
        canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule {
    static routes = routePaths
}
