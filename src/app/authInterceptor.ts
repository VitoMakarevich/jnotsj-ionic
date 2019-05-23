import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {StorageService} from './storage/storage.service';
import {from, Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, filter, switchMap, tap} from 'rxjs/operators';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService, private router: Router) {}

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
                return next
                    .handle(modifiedRequest)
                    .pipe(
                        catchError((httpErrorResponse: HttpErrorResponse) => {
                            if (httpErrorResponse.status === 401) {
                                this.router.navigate([`/${AppRoutingModule.routes.authModule.signIn}`])
                            }

                            return throwError(httpErrorResponse)
                        })
                    )
            })
        )
    }
}

export const HttpInterceptorsProvider = [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
}]
