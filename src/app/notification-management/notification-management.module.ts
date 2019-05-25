import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import {AuthModule} from '../auth/auth.module';
import {NotificationsListComponent} from './notifications-list/component/notifications-list.component';
import {NotificationsListPage} from './notifications-list/container/notifications-list.container';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {notificationsListReducer} from './store/reducers/notificationsList';
import {EffectsModule} from '@ngrx/effects';
import {NotificationsListEffects} from './store/effects/notificationsList';
import {NotificationItemComponent} from './notification-item/notification-item.component';
import {IonicModule} from '@ionic/angular';
import {notificationsAttemptsByUserReducer} from './store/reducers/notificationAttempts';
import {NotificationsAttemptsByUserEffects} from './store/effects/notificattionAttempts';

@NgModule({
  declarations: [NotificationsListComponent, NotificationsListPage, NotificationItemComponent],
  imports: [
    CommonModule,
      AuthModule,
      IonicModule,
    NotificationManagementRoutingModule,
      StoreModule.forFeature('notificationsList', notificationsListReducer),
      StoreModule.forFeature('notificationAttemptsByUser', notificationsAttemptsByUserReducer),
      EffectsModule.forFeature([NotificationsListEffects, NotificationsAttemptsByUserEffects])
  ]
})
export class NotificationManagementModule { }
