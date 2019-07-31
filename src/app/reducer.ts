import {SignInState} from './auth/store/reducers/signIn';
import {NotificationManagementModuleState} from './notification-management/store/reducers';
import {CommonModuleState} from './store/reducers';

export type RootState = {
    authModule: SignInState
    notificationManagementModule: NotificationManagementModuleState
    common: CommonModuleState
}
