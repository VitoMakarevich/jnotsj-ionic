import {signInReducer, SignInState} from './signIn';

export type SignInModuleReducer = {
    signIn: SignInState
}

export const signInModuleReducer = {
    signIn: signInReducer,
}
