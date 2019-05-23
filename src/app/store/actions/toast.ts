import {Action} from '@ngrx/store';

export const ToastActionNames = {
    ToastShow: 'ToastShow',
    ToastHide: 'ToastHide',
}

export class ToastShow implements Action {
    readonly type = ToastActionNames.ToastShow

    constructor(public text: string, public buttonValue: string) {}
}

export class ToastHide implements Action {
    readonly type = ToastActionNames.ToastHide

    constructor() {}
}

export type ToastActionTypes = ToastHide | ToastShow
