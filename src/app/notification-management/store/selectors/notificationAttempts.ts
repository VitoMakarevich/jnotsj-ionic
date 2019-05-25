import {RootState} from '../../../reducer';
import {createSelector} from '@ngrx/store';
import {NotificationsAttemptsByUserState} from '../reducers/notificationAttempts';

export const notificationsAttemptsByUser = (
    state: RootState
): NotificationsAttemptsByUserState => state.notificationAttemptsByUser

export const notificationsAttemptsListItems = createSelector(
    notificationsAttemptsByUser,
    entity => entity.attempts
)

export const notificationsAttemptsStatus = createSelector(
    notificationsAttemptsByUser,
    entity => entity.status,
)
