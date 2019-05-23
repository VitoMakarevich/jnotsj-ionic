import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInPage} from './sign-in/container/sign-in.container';
import {AppRoutingModule} from '../app-routing.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `auth/sign-in`
    },
    {
        path: 'sign-in',
        component: SignInPage,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
