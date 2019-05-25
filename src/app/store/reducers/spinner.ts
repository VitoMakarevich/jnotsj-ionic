import {SpinnerActionNames, SpinnerActionTypes} from '../actions/spinner';

export type SpinnerState = {
    status: {
        shown: boolean
    }
}

export const initialState: SpinnerState = {
    status: {
        shown: false
    },
}

export const spinnerReducer = (state: SpinnerState = initialState, action: SpinnerActionTypes): SpinnerState => {
    switch (action.type) {
        case SpinnerActionNames.Show:
            return {
                ...state,
                status: {
                    ...state.status,
                    shown: true,
                }
            }
        case SpinnerActionNames.Hide:
            return {
                ...state,
                status: {
                    ...state.status,
                    shown: false
                }
            }
        default:
            return state
    }
}
