import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootState} from '../reducer';
import {User} from '../types/User';
import {Storage} from '@ionic/storage'
import {SignInResponse} from '../auth/store/types/SignIn';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static UserKey = 'user'

  constructor(private storage: Storage) {}


  async setUser(signInResponse: SignInResponse): Promise<void> {
    return this.storage.set(StorageService.UserKey, JSON.stringify(signInResponse))
  }

  async getUser(): Promise<SignInResponse | undefined> {
    const stringUser = await this.storage.get(StorageService.UserKey)
    return stringUser ? JSON.parse(stringUser) : undefined
  }

  async getToken(): Promise<string | undefined> {
    const user = await this.getUser()
    return user ? user.accessToken : undefined
  }
}
