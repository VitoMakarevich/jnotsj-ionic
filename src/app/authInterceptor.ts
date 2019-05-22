import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {StorageService} from './storage/storage.service';
import {from, Observable} from 'rxjs';
import {Injectable, Provider} from '@angular/core';
import {fromPromise} from 'rxjs/internal-compatibility';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token$ = from(this.storageService.getToken())
        return token$.pipe(
            switchMap(tokenValue => {
                let modifiedRequest = req
                if (tokenValue) {
                   modifiedRequest = req.clone({
                       setHeaders: {
                           Authorization: `Bearer ${tokenValue}`
                       }
                   })
                }
                return next.handle(modifiedRequest)
            })
        )
    }
}

export const HttpInterceptorsProvider = [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
}]
