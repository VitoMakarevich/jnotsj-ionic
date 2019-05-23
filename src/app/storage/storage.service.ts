import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
import {SignInResponse, UserRole} from '../store/types/SignIn';

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

  async getRoles(): Promise<UserRole[] | undefined> {
      const user = await this.getUser()
      return user ? user.user.roles : undefined
  }
}
