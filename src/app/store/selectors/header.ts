import {createSelector} from '@ngrx/store';
import {commonModuleSelector} from './index';

export const headerStateSelector = createSelector(
    commonModuleSelector,
    state => {
        return state.header
    }
)
