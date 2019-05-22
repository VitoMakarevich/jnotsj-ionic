import {RootState} from '../../../reducer';
import {SignInState} from '../reducers/signIn';
import {createSelector} from '@ngrx/store';

export const signIn = (state: RootState): SignInState => state.signIn

export const signedInUser = createSelector(
    signIn,
    signInBranch => signInBranch.user,
)
