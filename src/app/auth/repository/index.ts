import hasher from 'argon2'

import { User, UserCreate, UserModel, UserSecurityModel } from '@/app/users/models'

// TODO: encrypt password
export const createUserAccount = async (user: UserCreate): Promise<User> => {
  try {
    const passwordHashed = await hasher.hash(user.password)

    const userSecurityCreated = await UserSecurityModel.create({ password: passwordHashed })
    const userCreated = await UserModel.create({ ...user, security: userSecurityCreated.id || userSecurityCreated._id })

    return userCreated.toObject({ getters: true, virtuals: false })

  } catch (error) {
    return null
  } finally {

  }
}

export const authRepository = () => {
  return {
    createUserAccount
  }
}