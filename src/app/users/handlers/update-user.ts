import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { IUpdateUser } from '@/app/users/models'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { IHandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleUpdateUser: Handler = async ({ body, set, params }): Promise<IHandleResponse<IUpdateUser>> => {
  const { id } = params
  const user = body as IUpdateUser

  const isValidId = validateMongoId(id)

  if (!isValidId) {
    set.status = DICTIONARY_ERRORS.INVALID_ID.code

    return {
      data: null,
      info: null,
      error: DICTIONARY_ERRORS.INVALID_ID,
    }
  }

  if (!user) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      data: null,
      info: null,
      error: DICTIONARY_ERRORS.MISSING_FIELDS,
    }
  }

  const newUser = await userRepository().update(id, user)

  return {
    data: newUser,
    error: null,
    info: null
  }
}