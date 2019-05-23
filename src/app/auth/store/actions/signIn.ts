import {Action} from '@ngrx/store';
import {SignInRequest} from '../types/SignIn';
import {User} from '../../../types/User';

export const SignInActionNames = {
    Begin: 'SignInBegin',
    Success: 'SignInSuccess',
    Error: 'SignInError',
}

export class SignInBegin implements Action {
    readonly type = SignInActionNames.Begin

    constructor(public signInRequest: SignInRequest) {}
}

export class SignInSuccess implements Action {
    readonly type = SignInActionNames.Success

    constructor(public user: User) {}
}

export class SignInError implements Action {
    readonly type = SignInActionNames.Error

    constructor(public error: Error) {}
}



export type SignInActionTypes = SignInBegin | SignInSuccess | SignInError
