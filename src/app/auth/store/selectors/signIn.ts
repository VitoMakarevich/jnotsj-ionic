import {RootState} from '../../../reducer';
import {SignInState} from '../reducers/signIn';
import {createSelector} from '@ngrx/store';
import {signInModuleSelector} from './index';

export const signedInUser = createSelector(
    signInModuleSelector,
    signInBranch => signInBranch.user,
)
