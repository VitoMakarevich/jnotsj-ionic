import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../../service/api.service';
import {SignInActionTypeNames, SignInActionTypes, SignInBegin, SignInError, SignInSuccess} from '../actions/signIn';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {SignInResponse} from '../types/SignIn';
import {StorageService} from '../../../storage/storage.service';

@Injectable()
export class AuthEffects {
        constructor(private actions$: Actions, private api: ApiService, private storageService: StorageService) {}

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(SignInActionTypeNames.Begin),
        mergeMap((action: SignInBegin): Observable<any> => this.api.signIn(action.signInRequest).pipe(
                map(async (signInResponse: SignInResponse) => {
                    await this.saveResponseToStorage(signInResponse)
                    return new SignInSuccess(signInResponse.user)
                }),
                catchError((error: Error) => of(new SignInError(error))),
            )
        ),
    )

    private saveResponseToStorage(signInResponse: SignInResponse) {
            this.storageService.setUser(signInResponse)
    }
}
