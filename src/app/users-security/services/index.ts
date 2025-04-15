import { getAllUsersSecurity } from './get-all-users-security.service'
import { createUserSecurity } from './create-user-security.service'
import { deleteUserSecurity } from './delete-user-security.service'
import { getUserSecurity } from './get-user-security.service'

export const usersSecurityServices = () => {
  return {
    getAll: getAllUsersSecurity,
    getById: getUserSecurity,
    create: createUserSecurity,
    delete: deleteUserSecurity
  }
}