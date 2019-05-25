import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../service/api.service';
import {catchError, delay, map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Localization} from '../../../static/strings';
import {UiApiService} from '../../../service/ui-api.service';
import {
    NotificationsListActionNames,
    NotificationsListBegin,
    NotificationsListError,
    NotificationsListSuccess
} from '../actions/notificationsList';
import {NotificationData} from '../types/notificationsList';

@Injectable()
export class NotificationsListEffects {
        constructor(
            private actions$: Actions,
            private api: ApiService,
            private uiApi: UiApiService,
            private localization: Localization,
        ) {}
    @Effect()
    notificationsList$ = this.actions$.pipe(
        ofType(NotificationsListActionNames.Begin),
        mergeMap((action: NotificationsListBegin): Observable<any> => this.api.notificationsList().pipe(
            map((response: NotificationData[]) => new NotificationsListSuccess(response)),
            catchError((error: Error) => {
                this.uiApi.showToast(
                    this.localization.errorMessages.tryAgainLater,
                    this.localization.buttonValues.ok,
                )
                return of(new NotificationsListError(error))
            }),
        ))
    )
}
