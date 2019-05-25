import {RootState} from '../../reducer';
import {createSelector} from '@ngrx/store';

const spinnerBranch = (state: RootState) => state.spinner

export const spinnerStateSelector = createSelector(
    spinnerBranch,
    state => state.status,
)
