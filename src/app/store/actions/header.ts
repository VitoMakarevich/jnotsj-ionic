import {Action} from '@ngrx/store';

export const HeaderActionNames = {
    ChangeText: 'ChangeText',
}

export class HeaderChange implements Action {
    readonly type = HeaderActionNames.ChangeText

    constructor(public text: string) {}
}

export type HeaderActionTypes = HeaderChange
