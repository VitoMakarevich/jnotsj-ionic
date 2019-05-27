import {toastReducer, ToastState} from './store/reducers/toast';
import {SignInState} from './auth/store/reducers/signIn';
import {headerReducer, HeaderState} from './store/reducers/header';
import {NotificationsListState} from './notification-management/store/reducers/notificationsList';
import {NotificationsAttemptsByUserState} from './notification-management/store/reducers/notificationAttempts';
import {spinnerReducer, SpinnerState} from './store/reducers/spinner';
import {NotificationManagementModuleState} from './notification-management/store/reducers';
import {CommonModuleState} from './store/reducers';

export type RootState = {
    authModule: SignInState
    notificationManagementModule: NotificationManagementModuleState
    common: CommonModuleState
}
