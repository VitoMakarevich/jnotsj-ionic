import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotificationData} from '../notification-management/store/types/notificationsList';
import {NotificationAttempt} from '../notification-management/store/types/notificationAttempt';
import {SignInRequest, SignInResponse} from '../auth/store/types/SignIn';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  signIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>('http://localhost:9090/auth/signin', signInRequest)
  }

  notificationsList(): Observable<NotificationData[]> {
      return this.httpClient.get<NotificationData[]>('http://localhost:9090/notificationData')
  }

  notificationAttemptsByUserId(id: number): Observable<NotificationAttempt[]> {
      return this.httpClient.get<NotificationAttempt[]>(`http://localhost:9090/user/${id}/notificationAttempt`)
  }
}
