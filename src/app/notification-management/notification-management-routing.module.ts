import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from '../auth/auth.module';
import {AuthGuard} from '../auth/auth-guard.service';
import {NotificationsListComponent} from './notifications-list/component/notifications-list.component';
import {StoreModule} from '@ngrx/store';
import {notificationsListReducer} from './store/reducers/notificationsList';
import {NotificationsListPage} from './notifications-list/container/notifications-list.container';
const routes: Routes = [
    {
        path: '',
        component: NotificationsListPage,
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule {
}
