import {RootState} from '../../reducer';
import {createSelector} from '@ngrx/store';

const toastBranch = (state: RootState) => state.toast

export const toastStateSelector = createSelector(
    toastBranch,
    state => state.status,
)
