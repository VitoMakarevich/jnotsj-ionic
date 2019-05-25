import {RootState} from '../../../reducer';
import {NotificationsListState} from '../reducers/notificationsList';
import {createSelector} from '@ngrx/store';
import {NotificationData} from '../types/notificationsList';
import moment from 'moment'

export const notificationsList = (state: RootState): NotificationsListState => state.notificationsList

export const notificationsListItems = createSelector(
    notificationsList,
    entity => entity.list.map((item: NotificationData) => ({
            ...item,
            startDate: moment(item.startDate),
            endDate: moment(item.endDate),
        }))
)

export const notificationsListStatus = createSelector(
    notificationsList,
    entity => entity.status,
)
