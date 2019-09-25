import {User} from '../../../types/User';

export type SignInRequest = {
    login: string
    password: string
}

export enum TokenType {
  Bearer = 'Bearer',
}

export type SignInResponse = {
    accessToken: string
    tokenType: TokenType,
    user: User
}
