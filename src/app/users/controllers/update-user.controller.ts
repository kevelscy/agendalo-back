import { Handler } from 'elysia'

import { userServices } from '@/app/users/services'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { createCustomError } from '@/lib/utils/errors'
import { HandleResponse } from '@/lib/schemas/http'

import { UserEditInput } from '@/users/entities/user.entity'

export const handleUpdateUser: Handler = async ({ body, set, params }): Promise<HandleResponse<UserEditInput>> => {
  const { id } = params
  const user = body as UserEditInput

  const isValidId = validateMongoId(id)

  if (!isValidId) {
    throw createCustomError(['INVALID_ID'], set)
  }

  if (!user) {
    throw createCustomError(['MISSING_FIELDS'], set)
  }

  const newUser = await userServices().update(id, user)

  if (!newUser) {
    throw createCustomError(['USER_CREATE_ERROR'], set)
  }

  return {
    result: { data: newUser },
    errors: [],
    info: null
  }
}