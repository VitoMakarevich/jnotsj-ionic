import {SpinnerActionNames, SpinnerActionTypes} from '../actions/spinner';

export type SpinnerState = {
    shown: boolean
}

export const initialState: SpinnerState = {
    shown: false
}

export const spinnerReducer = (state: SpinnerState = initialState, action: SpinnerActionTypes): SpinnerState => {
    switch (action.type) {
        case SpinnerActionNames.Show:
            return {
                ...state,
                shown: true,
            }
        case SpinnerActionNames.Hide:
            return {
                ...state,
                shown: false
            }
        default:
            return state
    }
}
