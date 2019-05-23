export type User = {
    id: number
    username: string
    email: string
    roles: UserRole[]
}

export type UserRole = {
    id: number,
    roleName: RoleName
}

export enum RoleName {
    Admin = 'ADMIN',
    User = 'USER'
}
