import {Action} from '@ngrx/store';
import {NotificationAttempt} from '../types/notificationAttempt';

export const NotificationAttemptByUserActionNames = {
    Begin: 'NotificationAttemptByUserBegin',
    Success: 'NotificationAttemptByUserSuccess',
    Error: 'NotificationAttemptByUserError',
}

export class NotificationAttemptByUserBegin implements Action {
    readonly type = NotificationAttemptByUserActionNames.Begin

    constructor(public userId: number) {}
}

export class NotificationAttemptByUserSuccess implements Action {
    readonly type = NotificationAttemptByUserActionNames.Success

    constructor(public attempts: NotificationAttempt[]) {}
}

export class NotificationAttemptByUserError implements Action {
    readonly type = NotificationAttemptByUserActionNames.Error

    constructor(public error: Error) {}
}



export type NotificationAttemptByUserActionTypes = NotificationAttemptByUserBegin |
    NotificationAttemptByUserSuccess |
    NotificationAttemptByUserError
