import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../service/api.service';
import {SignInActionNames, SignInActionTypes, SignInBegin, SignInError, SignInSuccess} from '../actions/signIn';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {combineLatest, from, Observable, of} from 'rxjs';
import {SignInResponse} from '../types/SignIn';
import {StorageService} from '../../../storage/storage.service';
import {Router} from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module';
import {ToastShow} from '../../../store/actions/toast';
import {Localization} from '../../../static/strings';

@Injectable()
export class AuthEffects {
        constructor(
            private actions$: Actions,
            private api: ApiService,
            private storageService: StorageService,
            private router: Router,
            private localization: Localization
        ) {}

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(SignInActionNames.Begin),
        switchMap((action: SignInBegin) => this.api.signIn(action.signInRequest)),
        switchMap((signInResponse: SignInResponse) => of(this.saveResponseToStorage(signInResponse)).pipe(
                map(() => signInResponse),
            )
        ),
        map( (signInResponse: SignInResponse) => new SignInSuccess(signInResponse.user)),
        catchError((error: Error) => {
            return from([
                new ToastShow(
                    this.localization.errorMessages.passwordIsIncorrect,
                    this.localization.buttonValues.ok,
                ),
                new SignInError(error),
            ])
        }),
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
