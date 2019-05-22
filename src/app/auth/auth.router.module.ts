import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInPage} from './sign-in/container/sign-in.container';

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInPage,
    },
    {
        path: '',
        redirectTo: '/sign-in',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
