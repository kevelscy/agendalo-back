import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { UserEdit } from '@/app/users/models'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleUpdateUser: Handler = async ({ body, set, params }): Promise<HandleResponse<UserEdit>> => {
  const { id } = params
  const user = body as UserEdit

  const isValidId = validateMongoId(id)

  if (!isValidId) {
    set.status = DICTIONARY_ERRORS.INVALID_ID.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.INVALID_ID }],
    }
  }

  if (!user) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const newUser = await userRepository().update(id, user)

  return {
    result: { data: newUser },
    errors: [],
    info: null
  }
}