import {Status} from '../../../types/Status';
import {NotificationAttempt} from '../types/notificationAttempt';
import {
    NotificationAttemptByUserActionNames,
    NotificationAttemptByUserActionTypes,
    NotificationAttemptByUserError,
    NotificationAttemptByUserSuccess
} from '../actions/notificationAttempts';

export type NotificationsAttemptsByUserState = {
    attempts: NotificationAttempt[],
    status: Status
}

export const initialState: NotificationsAttemptsByUserState = {
    status: {
        loading: false
    },
    attempts: [],
}

export const notificationsAttemptsByUserReducer = (
    state: NotificationsAttemptsByUserState = initialState, action: NotificationAttemptByUserActionTypes
): NotificationsAttemptsByUserState => {
    switch (action.type) {
        case NotificationAttemptByUserActionNames.Begin:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                    error: undefined,
                }
            }
        case NotificationAttemptByUserActionNames.Success:
            return {
                ...state,
                // TODO: fix ignore
                // @ts-ignore
                attempts: (action as NotificationAttemptByUserSuccess).attempts,
                status: {
                    loading: false,
                }
            }
        case NotificationAttemptByUserActionNames.Error:
            return {
                ...state,
                status: {
                    loading: false,
                    // TODO: fix ignore
                    // @ts-ignore
                    error: (action as NotificationAttemptByUserError).error
                }
            }
        default:
            return state
    }
}
