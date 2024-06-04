import hasher from 'argon2'

import { ICreateUser, IUpdateUser, IUser, UserModel, UserSecurityModel } from '../models'

export const getAll = async (): Promise<IUser[]> => {
  const users = await UserModel.find()
  return users
}

export const getById = async (id: string): Promise<IUser> => {
  const userFinded = await UserModel.findById(id)
  return userFinded as IUser
}

// TODO: encrypt password
export const create = async (user: ICreateUser): Promise<IUser> => {
  try {
    const passwordHashed = await hasher.hash(user.password)

    const userSecurityCreated = await UserSecurityModel.create({ password: passwordHashed })
    const userCreated = await UserModel.create({ ...user, security: userSecurityCreated.id })

    const userObject = userCreated.toObject({ getters: true, virtuals: false })
    delete userObject.security

    return userObject

  } catch (error) {
    return null
  } finally {

  }
}

export const update = async (id: string, user: IUpdateUser): Promise<IUser> => {
  const userUpdated = await UserModel.findByIdAndUpdate(id, user)
  return userUpdated as IUser
}

export const deleteUser = async (id: string): Promise<IUser> => {
  const userDeleted = await UserModel.findByIdAndDelete(id)
  console.log({ userDeleted })
  return userDeleted as IUser
}

export const userRepository = () => {
  return {
    getAll,
    getById,
    create,
    update,
    delete: deleteUser
  }
}