import {HeaderActionNames, HeaderActionTypes} from '../actions/header';

export type HeaderState = {
    header: {
        text: string
    }
}

export const initialState: HeaderState = {
    header: {
        text: '',
    }
}

export const headerReducer = (state: HeaderState = initialState, action: HeaderActionTypes): HeaderState => {
    switch (action.type) {
        case HeaderActionNames.ChangeText:
            return {
                ...state,
                header: {
                    ...state.header,
                    text: action.text,
                }
            }
        default:
            return state
    }
}
