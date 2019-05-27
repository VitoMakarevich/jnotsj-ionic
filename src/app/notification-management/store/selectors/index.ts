import {RootState} from '../../../reducer';
import {NotificationManagementModuleState} from '../reducers';

export const notificationStateSelector = (state: RootState): NotificationManagementModuleState => state.notificationManagementModule
