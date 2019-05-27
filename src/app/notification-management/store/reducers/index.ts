import {notificationsAttemptsByUserReducer, NotificationsAttemptsByUserState} from './notificationAttempts';
import {notificationsListReducer, NotificationsListState} from './notificationsList';

export type NotificationManagementModuleState = {
    attempts: NotificationsAttemptsByUserState,
    list: NotificationsListState,
}

export const notificationManagementReducer = {
    attempts: notificationsAttemptsByUserReducer,
    list: notificationsListReducer,
}

