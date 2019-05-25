import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {UiApiService} from './service/ui-api.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private uiApi: UiApiService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.uiApi.showSpinner()
        return next.handle(req).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse) {
                        // debugger
                        this.uiApi.hideSpinner()
                    }
                },
                () => {
                    this.uiApi.hideSpinner()
                }
            ),
        )
    }
}

export const SpinnerInterceptorProvider = [{
    provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true,
}]

