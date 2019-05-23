import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import {AuthModule} from '../auth/auth.module';
import {NotificationsListComponent} from './notifications-list/notifications-list.component';

@NgModule({
  declarations: [NotificationsListComponent],
  imports: [
    CommonModule,
      AuthModule,
    NotificationManagementRoutingModule
  ]
})
export class NotificationManagementModule { }
