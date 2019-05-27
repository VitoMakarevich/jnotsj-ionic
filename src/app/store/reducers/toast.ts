import {
    ToastActionNames,
    ToastActionTypes,
    ToastShow
} from '../actions/toast';

export type ToastState = {
    shown: boolean
    text?: string
    buttonText?: string
}

export const initialState: ToastState = {
    shown: false
}

export const toastReducer = (state: ToastState = initialState, action: ToastActionTypes): ToastState => {
    switch (action.type) {
        case ToastActionNames.ToastShow:
            return {
                ...state,
                shown: true,
                text: (action as ToastShow).text,
                buttonText: (action as ToastShow).buttonValue,
            }
        case ToastActionNames.ToastHide:
            return {
                ...state,
                shown: false
            }
        default:
            return state
    }
}
