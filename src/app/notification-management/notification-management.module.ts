import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import {AuthModule} from '../auth/auth.module';
import {NotificationsListComponent} from './notifications-list/component/notifications-list.component';
import {NotificationsListPage} from './notifications-list/container/notifications-list.container';
import {NotificationItemComponent} from './notification-item/notification-item.component';
import {IonicModule} from '@ionic/angular';
import {AddNotificationComponent} from './add-notification/component/add-notification.component';
import {AddNotificationPage} from './add-notification/container/add-notification.container';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      NotificationsListComponent,
      NotificationsListPage,
      NotificationItemComponent,
      AddNotificationComponent,
      AddNotificationPage,
  ],
  imports: [
    CommonModule,
      AuthModule,
      IonicModule,
    NotificationManagementRoutingModule,
      ReactiveFormsModule,
  ]
})
export class NotificationManagementModule { }
