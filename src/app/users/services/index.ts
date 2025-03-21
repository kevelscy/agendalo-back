import { getAllUsers } from './get-all-users.service'
import { createUser } from './create-user.service'
import { updateUser } from './update-user.service'
import { deleteUser } from './delete-user.service'
import { getUser } from './get-user.service'

export const userServices = () => {
  return {
    getAll: getAllUsers,
    getById: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser
  }
}