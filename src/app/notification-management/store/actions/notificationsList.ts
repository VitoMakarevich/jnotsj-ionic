import {Action} from '@ngrx/store';
import {NotificationData} from '../types/notificationsList';

export const NotificationsListActionNames = {
    Begin: 'NotificationsListBegin',
    Success: 'NotificationsListSuccess',
    Error: 'NotificationsListError',
}

export class NotificationsListBegin implements Action {
    readonly type = NotificationsListActionNames.Begin

    constructor() {}
}

export class NotificationsListSuccess implements Action {
    readonly type = NotificationsListActionNames.Success

    constructor(public list: NotificationData[]) {}
}

export class NotificationsListError implements Action {
    readonly type = NotificationsListActionNames.Error

    constructor(public error: Error) {}
}



export type NotificationsListActionTypes = NotificationsListBegin | NotificationsListError | NotificationsListSuccess
