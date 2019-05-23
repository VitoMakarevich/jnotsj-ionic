import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInRequest, SignInResponse} from '../store/types/SignIn';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  signIn(signInRequest: SignInRequest): Observable<SignInResponse> {
    return this.httpClient.post<SignInResponse>('http://localhost:9090/auth/signin', signInRequest)
  }
}
