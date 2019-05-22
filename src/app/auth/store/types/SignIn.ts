import {User} from '../../../types/User';

export type SignInRequest = {
    login: string
    password: string
}

export type SignInResponse = {
    accessToken: string
    tokenType: 'Bearer'
    user: User
}
