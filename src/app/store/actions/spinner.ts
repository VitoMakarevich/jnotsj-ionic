import {Action} from '@ngrx/store';

export const SpinnerActionNames = {
    Show: 'SpinnerShow',
    Hide: 'SpinnerHide',
}

export class SpinnerShow implements Action {
    readonly type = SpinnerActionNames.Show

    constructor() {}
}

export class SpinnerHide implements Action {
    readonly type = SpinnerActionNames.Hide

    constructor() {}
}

export type SpinnerActionTypes = SpinnerShow | SpinnerHide
