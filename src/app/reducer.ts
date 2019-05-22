import {signInReducer, SignInState} from './auth/store/reducers/signIn';

export const rootReducer = {
}

export type RootState = {
    signIn: SignInState
}
