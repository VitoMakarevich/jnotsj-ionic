import {RoleName, UserRole} from '../types/User';

const roleSortedByPermissions = [RoleName.User, RoleName.Admin]

export const hasAdminPermissions = (userRoles: UserRole[]) =>
    userRoles.some((userRole) => roleSortedByPermissions.slice(1).includes(userRole.roleName))

export const hasUserPermissions = (userRoles: UserRole[]) =>
    userRoles.some((userRole) => roleSortedByPermissions.includes(userRole.roleName))
