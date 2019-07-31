import {createSelector} from '@ngrx/store';
import {commonModuleSelector} from './index';

export const spinnerStateSelector = createSelector(
    commonModuleSelector,
    state => state.spinner,
)
