import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotificationData} from '../notification-management/store/types/notificationsList';
import {NotificationAttempt} from '../notification-management/store/types/notificationAttempt';
import {SignInRequest, SignInResponse} from '../auth/store/types/SignIn';

export const UrlPrefixInjectionToken = new InjectionToken('apiUrlPrefix')

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private buildUrl(path: string) {
        return `${this.apiPrefix}${path}`
    }

  constructor(private httpClient: HttpClient, @Inject(UrlPrefixInjectionToken) private apiPrefix: string) {}

  signIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>(this.buildUrl('/auth/signin'), signInRequest)
  }

  notificationsList(): Observable<NotificationData[]> {
      return this.httpClient.get<NotificationData[]>(this.buildUrl('/notificationData'))
  }

  notificationAttemptsByUserId(id: number): Observable<NotificationAttempt[]> {
      return this.httpClient.get<NotificationAttempt[]>(this.buildUrl(`/user/${id}/notificationAttempt`))
  }
}
