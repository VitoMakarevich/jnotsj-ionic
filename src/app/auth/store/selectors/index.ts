import {RootState} from '../../../reducer';
import {SignInState} from '../reducers/signIn';

export const signInModuleSelector = (state: RootState): SignInState => state.authModule
