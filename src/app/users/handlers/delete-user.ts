import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { User } from '@/app/users/models'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleDeleteUserById: Handler = async ({ params, set }): Promise<HandleResponse<User>> => {
  try {
    const { id } = params
    const user = await userRepository().getById(id)

    const isValidId = validateMongoId(id)

    if (!isValidId) {
      set.status = DICTIONARY_ERRORS.INVALID_ID.code

      return {
        result: null,
        info: null,
        errors: [{ ...DICTIONARY_ERRORS.INVALID_ID }],
      }
    }

    return {
      result: { data: user },
      errors: [],
      info: null
    }

  } catch (error) {
    set.status = DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE.code

    return {
      errors: [{ ...DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE }],
      result: null,
      info: null
    }
  }
}