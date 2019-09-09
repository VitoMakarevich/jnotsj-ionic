import {SignInState} from './auth/store/reducers/signIn';
import {CommonModuleState} from './store/reducers';

export type RootState = {
    authModule: SignInState
    common: CommonModuleState
}
