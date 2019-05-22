import {User} from '../../../types/User';
import {Status} from '../../../types/Status';
import {SignInActionTypeNames, SignInActionTypes, SignInError, SignInSuccess} from '../actions/signIn';

export type SignInState = {
    user?: User
    status: Status
}

export const initialState: SignInState = {
    status: {
        loading: false,
    }
}

export const signInReducer = (state: SignInState = initialState, action: SignInActionTypes): SignInState => {
    switch (action.type) {
        case SignInActionTypeNames.Begin:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                    error: undefined,
                }
            }
        case SignInActionTypeNames.Success:
            return {
                ...state,
                // TODO: fix ignore
                // @ts-ignore
                user: (action as SignInSuccess).payload,
            }
        case SignInActionTypeNames.Error:
            return {
                ...state,
                status: {
                    loading: false,
                    // TODO: fix ignore
                    // @ts-ignore
                    error: (action as SignInError).error
                }
            }
        default:
            return state
    }
}
