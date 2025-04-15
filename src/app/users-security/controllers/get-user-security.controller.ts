import { Handler } from 'elysia'

import { UserSecurity } from '@/users-security/entities/user-security.entity'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'
import { HandleResponse } from '@/lib/schemas/http'
import { userServices } from '@/app/users/services'

export const handleGetUserSecurityById: Handler = async ({ params, set }): Promise<HandleResponse<UserSecurity>> => {
  try {
    const { id } = params
    const user = await userServices().getById(id)

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
    console.error('handleGetUserById', error)

    set.status = DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE.code

    return {
      errors: [{ ...DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE }],
      result: null,
      info: null
    }
  }
}