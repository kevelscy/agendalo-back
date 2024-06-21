import hasher from 'argon2'

import { ICreateUser, IUserSecurity, UserSecurityModel } from '@/app/users/models'

// TODO: encrypt password
export const createUserAccount = async (user: ICreateUser): Promise<IUserSecurity> => {
  try {
    const passwordHashed = await hasher.hash(user.password)

    const userSecurityCreated = await UserSecurityModel.create({ password: passwordHashed })

    return userSecurityCreated.toObject({ getters: true, virtuals: false })

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