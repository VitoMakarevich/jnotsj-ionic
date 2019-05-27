import {RootState} from '../../reducer';
import {CommonModuleState} from '../reducers';

export const commonModuleSelector = (state: RootState): CommonModuleState => state.common
