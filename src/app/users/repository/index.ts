import hasher from 'argon2'

import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/pagination-helpers'
import { UserCreate, UserEdit, User, UserModel, UserSecurityModel, UserFilters, UserQueries } from '../models'
import { isObjectEmpty } from '@/lib/utils/is-object-empty'
import { Params, Result } from '@/lib/schemas/http'


export const getAll = async (params: Params<UserQueries, UserFilters> = {}): Promise<Result<User[]>> => {
  const { pagination, filters, queries } = params
  let filter, query

  if (!isObjectEmpty(filters)) filter = applyFilters(filters)
  if (!isObjectEmpty(queries)) query = applyQueries(queries)

  const { limit: pageLimit, skip } = paginate(pagination)

  const products = await UserModel.find({ ...filter, ...query })
    .limit(pageLimit)
    .skip(skip)

  const count = await UserModel.countDocuments({ ...filter, ...query });

  const paginationInfo = generatePaginationResponse(pageLimit, pagination.page, count);

  return {
    pagination: paginationInfo,
    data: products
  }
}

export const getById = async (id: string): Promise<User> => {
  const userFinded = await UserModel.findById(id)
  return userFinded as User
}

// TODO: encrypt password
export const create = async (user: UserCreate): Promise<User> => {
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

export const update = async (id: string, user: UserEdit): Promise<User> => {
  const userUpdated = await UserModel.findByIdAndUpdate(id, user)
  return userUpdated as User
}

export const deleteUser = async (id: string): Promise<User> => {
  const userDeleted = await UserModel.findByIdAndDelete(id)
  return userDeleted as User
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