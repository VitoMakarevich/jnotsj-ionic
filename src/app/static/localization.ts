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
        attend: 'Attend',
        disattend: 'Disattend',
    };

    public headers = {
        signIn: 'Sign In',
        notificationManagement: 'Notification Management',
        createNotification: 'Create notification',
    };

    public messages = {
      attempted: 'Attempted',
      disattempted: 'Disattempted',
    }

    public errorMessages = {
        fieldRequired: 'This field is required',
        passwordIsIncorrect: 'Password is incorrect',
        tryAgainLater: 'Please try again later',
    }
}
