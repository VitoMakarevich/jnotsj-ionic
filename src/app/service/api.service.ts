import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    NotificationData,
    NotificationDataRaw,
    NotificationDataRequest
} from '../notification-management/types/notificationsList';
import {NotificationAttempt} from '../notification-management/types/notificationAttempt';
import {SignInRequest, SignInResponse} from '../auth/store/types/SignIn';
import {map} from 'rxjs/operators';
import moment from 'moment';

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
      return this.httpClient.get<NotificationDataRaw[]>(this.buildUrl('/notificationData')).pipe(
          map((data: NotificationDataRaw[]): NotificationData[] => data.map((item: NotificationDataRaw): NotificationData => ({
              ...item,
              endDate: moment(item.endDate),
              startDate: moment(item.startDate),
          }) as NotificationData)
      ))
  }

  notificationAttemptsByUserId(id: number): Observable<NotificationAttempt[]> {
      return this.httpClient.get<NotificationAttempt[]>(this.buildUrl(`/user/${id}/notificationAttempt`))
  }

  createNotification(request: NotificationDataRequest) {
    return this.httpClient.post(this.buildUrl('/notificationData'), request)
  }

  createAttempt(notificationDataId: number) {
      return this.httpClient.post(this.buildUrl(`/notificationData/${notificationDataId}/notificationAttempt`), {})
  }

  deleteAttempt(attemptId: number) {
      return this.httpClient.delete(this.buildUrl(`/notificationAttempt/${attemptId}`))
  }
}
