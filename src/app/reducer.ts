import {toastReducer, ToastState} from './store/reducers/toast';
import {SignInState} from './auth/store/reducers/signIn';

export const rootReducer = {
    toast: toastReducer,
}

export type RootState = {
    signIn: SignInState
    toast: ToastState
}
