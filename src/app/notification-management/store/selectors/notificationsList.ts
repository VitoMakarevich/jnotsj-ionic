import {RootState} from '../../../reducer';
import {NotificationsListState} from '../reducers/notificationsList';
import {createSelector} from '@ngrx/store';
import {NotificationData} from '../types/notificationsList';
import moment from 'moment'
import {notificationStateSelector} from './index';

export const notificationsListSelector = createSelector(
    notificationStateSelector,
    state => state.list
)

export const notificationsListItems = createSelector(
    notificationsListSelector,
    entity => entity.list.map((item: NotificationData) => ({
            ...item,
            startDate: moment(item.startDate),
            endDate: moment(item.endDate),
        }))
)

export const notificationsListStatus = createSelector(
    notificationsListSelector,
    entity => entity.status,
)
