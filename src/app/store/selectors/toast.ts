import {createSelector} from '@ngrx/store';
import {commonModuleSelector} from './index';

export const toastStateSelector = createSelector(
    commonModuleSelector,
    state => state.toast,
)
