import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from '../auth/auth.module';
import {AuthGuard} from '../auth/auth-guard.service';
import {NotificationsListComponent} from './notifications-list/notifications-list.component';
const routes: Routes = [
    {
        path: '',
        component: NotificationsListComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthModule],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule {
}
