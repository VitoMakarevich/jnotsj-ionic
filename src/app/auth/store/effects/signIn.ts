import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../service/api.service';
import {SignInActionNames, SignInBegin, SignInError, SignInSuccess} from '../actions/signIn';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {SignInResponse} from '../types/SignIn';
import {StorageService} from '../../../storage/storage.service';
import {Router} from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module';
import {Localization} from '../../../static/localization';
import {UiApiService} from '../../../service/ui-api.service';
import { HttpErrorResponse } from '@angular/common/http'
import { constants } from 'http2'
import HTTP_STATUS_UNAUTHORIZED = module

@Injectable()
export class AuthEffects {
        constructor(
            private actions$: Actions,
            private api: ApiService,
            private storageService: StorageService,
            private router: Router,
            private uiApi: UiApiService,
            private localization: Localization,
        ) {}
    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(SignInActionNames.Begin),
        mergeMap((action: SignInBegin): Observable<any> => this.api.signIn(action.signInRequest).pipe(
            tap((signInResponse: SignInResponse) => this.saveResponseToStorage(signInResponse)),
            map((signInResponse: SignInResponse) => new SignInSuccess(signInResponse.user)),
            catchError((error: HttpErrorResponse) => {
                if (error.status === HTTP_STATUS_UNAUTHORIZED) {
                  this.uiApi.showToast(
                    this.localization.errorMessages.passwordIsIncorrect,
                    this.localization.buttonValues.ok,
                  )
                }
                return of(new SignInError(error))
            }),
        ))
    )

    @Effect({dispatch: false})
    signInSuccess$ = this.actions$.pipe(
        ofType(SignInActionNames.Success),
        tap(() => this.router.navigate([`/${AppRoutingModule.routes.notificationManagement.notificationsList}`]))
    )

    private saveResponseToStorage(signInResponse: SignInResponse) {
            return this.storageService.setUser(signInResponse)
    }
}
