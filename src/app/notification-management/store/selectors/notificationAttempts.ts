import {createSelector} from '@ngrx/store';
import {notificationStateSelector} from './index';

export const notificationsAttemptsSelector = createSelector(
    notificationStateSelector,
    entity => entity.attempts
)


export const notificationsAttemptsListItems = createSelector(
    notificationsAttemptsSelector,
    entity => entity.attempts
)

export const notificationsAttemptsStatus = createSelector(
    notificationsAttemptsSelector,
    entity => entity.status,
)
