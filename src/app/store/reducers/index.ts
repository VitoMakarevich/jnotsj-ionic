import {headerReducer, HeaderState} from './header';
import {spinnerReducer, SpinnerState} from './spinner';
import {toastReducer, ToastState} from './toast';
import {combineReducers} from '@ngrx/store';

export type CommonModuleState = {
    header: HeaderState
    spinner: SpinnerState
    toast: ToastState
}

export const commonModuleReducer = {
    common: combineReducers({
            header: headerReducer,
            spinner: spinnerReducer,
            toast: toastReducer
        }
    )
}
