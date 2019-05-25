import {RootState} from '../../reducer';
import {createSelector} from '@ngrx/store';
import {HeaderState} from '../reducers/header';

const headerBranch = (state: RootState): HeaderState => state.header

export const headerStateSelector = createSelector(
    headerBranch,
    state => state.header,
)
