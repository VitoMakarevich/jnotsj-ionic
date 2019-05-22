import {Action} from '@ngrx/store';
import {User} from '../../../types/User';
import {SignInRequest} from '../types/SignIn';

export const SignInActionTypeNames = {
    Begin: 'SignInBegin',
    Success: 'SignInSuccess',
    Error: 'SignInError',
}

export class SignInBegin implements Action {
    readonly type = SignInActionTypeNames.Begin

    constructor(public signInRequest: SignInRequest) {}
}

export class SignInSuccess implements Action {
    readonly type = SignInActionTypeNames.Success

    constructor(public payload: User) {}
}

export class SignInError implements Action {
    readonly type = SignInActionTypeNames.Error

    constructor(public error: Error) {}
}

export type SignInActionTypes = SignInBegin | SignInError | SignInError
