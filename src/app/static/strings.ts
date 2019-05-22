import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Localization {
    public labels = {
        login: 'Login',
        password: 'Password',
    };

    public buttonValues = {
        signIn: 'Sign In',
    };

    public headers = {
        signIn: 'Sign In'
    };

    public errorMessages = {
        fieldRequired: 'This field is required',
    }
}
