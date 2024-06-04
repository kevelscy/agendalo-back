import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { IUser } from '@/app/users/models'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { IHandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleDeleteUserById: Handler = async ({ params, set }): Promise<IHandleResponse<IUser>> => {
  try {
    const { id } = params
    const user = await userRepository().getById(id)

    const isValidId = validateMongoId(id)

    if (!isValidId) {
      set.status = DICTIONARY_ERRORS.INVALID_ID.code

      return {
        data: null,
        info: null,
        error: DICTIONARY_ERRORS.INVALID_ID,
      }
    }

    return {
      data: user,
      error: null,
      info: null
    }

  } catch (error) {
    set.status = DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE.code

    return {
      error: DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE,
      data: null,
      info: null
    }
  }
}