import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {hasUserPermissions} from '../utils/roleUtils';
import {switchMap} from 'rxjs/operators';
import {AppRoutingModule} from '../app-routing.module';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private storageService: StorageService, private router: Router) {}


    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return from(this.storageService.getRoles()).pipe(
            switchMap((userRoles) => {
                const canRoute = userRoles ? hasUserPermissions(userRoles) : false

                if (!canRoute) {
                    this.router.navigate([AppRoutingModule.routes.authModule.signIn])
                }

                return of(canRoute)
            })
        )
    }
}
