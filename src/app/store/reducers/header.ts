import {HeaderActionNames, HeaderActionTypes} from '../actions/header';

export type HeaderState = {
    text: string
}

export const initialState: HeaderState = {
    text: '',
}

export const headerReducer = (state: HeaderState = initialState, action: HeaderActionTypes): HeaderState => {
    switch (action.type) {
        case HeaderActionNames.ChangeText:
            return {
                ...state,
                text: action.text,
            }
        default:
            return state
    }
}
