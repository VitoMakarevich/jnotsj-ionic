import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../service/api.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Localization} from '../../../static/strings';
import {UiApiService} from '../../../service/ui-api.service';
import {
    NotificationAttemptByUserActionNames,
    NotificationAttemptByUserBegin, NotificationAttemptByUserError,
    NotificationAttemptByUserSuccess
} from '../actions/notificationAttempts';
import {NotificationAttempt} from '../types/notificationAttempt';

@Injectable()
export class NotificationsAttemptsByUserEffects {
    constructor(
        private actions$: Actions,
        private api: ApiService,
        private uiApi: UiApiService,
        private localization: Localization,
    ) {}
    @Effect()
    notificationsAttemptsByUser$ = this.actions$.pipe(
        ofType(NotificationAttemptByUserActionNames.Begin),
        mergeMap(
            (action: NotificationAttemptByUserBegin): Observable<any> =>
                this.api.notificationAttemptsByUserId(action.userId).pipe(
            map((response: NotificationAttempt[]) => new NotificationAttemptByUserSuccess(response)),
            catchError((error: Error) => {
                this.uiApi.showToast(
                    this.localization.errorMessages.tryAgainLater,
                    this.localization.buttonValues.ok,
                )
                return of(new NotificationAttemptByUserError(error))
            }),
        ))
    )
}
