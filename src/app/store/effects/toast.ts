import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../service/api.service';
import {ToastActionNames, ToastHide, ToastShow} from '../actions/toast';
import {catchError, delay, map, switchMap, tap} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {SignInResponse} from '../types/SignIn';
import {StorageService} from '../../storage/storage.service';
import {Router} from '@angular/router';

@Injectable()
export class ToastEffects {
        constructor(private actions$: Actions) {}
}
