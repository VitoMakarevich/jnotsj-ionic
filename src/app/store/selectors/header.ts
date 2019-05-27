import {RootState} from '../../reducer';
import {createSelector} from '@ngrx/store';
import {HeaderState} from '../reducers/header';
import {commonModuleSelector} from './index';

export const headerStateSelector = createSelector(
    commonModuleSelector,
    state => {
        return state.header
    }
)
