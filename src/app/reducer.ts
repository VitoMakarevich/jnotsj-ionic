import {toastReducer, ToastState} from './store/reducers/toast';
import {SignInState} from './auth/store/reducers/signIn';
import {headerReducer, HeaderState} from './store/reducers/header';
import {NotificationsListState} from './notification-management/store/reducers/notificationsList';
import {NotificationsAttemptsByUserState} from './notification-management/store/reducers/notificationAttempts';
import {spinnerReducer, SpinnerState} from './store/reducers/spinner';

export const rootReducer = {
    toast: toastReducer,
    header: headerReducer,
    spinner: spinnerReducer,
}

export type RootState = {
    signIn: SignInState
    toast: ToastState
    header: HeaderState
    notificationsList: NotificationsListState
    notificationAttemptsByUser: NotificationsAttemptsByUserState
    spinner: SpinnerState
}
