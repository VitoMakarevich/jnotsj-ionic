import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Localization {
    public labels = {
        login: 'Login',
        password: 'Password',
        startDate: 'Start Date',
        endDate: 'End Date',
        text: 'Text',
    };

    public buttonValues = {
        signIn: 'Sign In',
        ok: 'Ok',
        save: 'Save',
    };

    public headers = {
        signIn: 'Sign In',
        notificationManagement: 'Notification Management',
        createNotification: 'Create notification',
    };

    public errorMessages = {
        fieldRequired: 'This field is required',
        passwordIsIncorrect: 'Password is incorrect',
        tryAgainLater: 'Please try again later',
    }
}
