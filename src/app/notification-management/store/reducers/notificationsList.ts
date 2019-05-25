import {Status} from '../../../types/Status';
import {
    NotificationsListActionNames,
    NotificationsListActionTypes,
    NotificationsListError,
    NotificationsListSuccess,
} from '../actions/notificationsList';
import {NotificationData} from '../types/notificationsList';

export type NotificationsListState = {
    list: NotificationData[]
    status: Status
}

export const initialState: NotificationsListState = {
    status: {
        loading: false
    },
    list: [],
}

export const notificationsListReducer = (
    state: NotificationsListState = initialState, action: NotificationsListActionTypes
): NotificationsListState => {
    switch (action.type) {
        case NotificationsListActionNames.Begin:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                    error: undefined,
                }
            }
        case NotificationsListActionNames.Success:
            return {
                ...state,
                // TODO: fix ignore
                // @ts-ignore
                list: (action as NotificationsListSuccess).list,
                status: {
                    loading: false,
                }
            }
        case NotificationsListActionNames.Error:
            return {
                ...state,
                status: {
                    loading: false,
                    // TODO: fix ignore
                    // @ts-ignore
                    error: (action as NotificationsListError).error
                }
            }
        default:
            return state
    }
}
