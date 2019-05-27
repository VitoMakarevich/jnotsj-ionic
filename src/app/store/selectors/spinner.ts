import {createSelector} from '@ngrx/store';
import {commonModuleReducer} from '../reducers';
import {commonModuleSelector} from './index';

export const spinnerStateSelector = createSelector(
    commonModuleSelector,
    state => state.spinner,
)
