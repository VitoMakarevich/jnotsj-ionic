import {User} from '../../../types/User';
import {Status} from '../../../types/Status';
import {SignInActionNames, SignInActionTypes, SignInError, SignInSuccess} from '../actions/signIn';

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
        case SignInActionNames.Begin:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                    error: undefined,
                }
            }
        case SignInActionNames.Success:
            return {
                ...state,
                // TODO: fix ignore
                // @ts-ignore
                user: (action as SignInSuccess).user,
                status: {
                    ...state.status,
                    loading: false
                }
            }
        case SignInActionNames.Error:
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
