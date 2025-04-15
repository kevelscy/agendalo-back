import { Handler } from 'elysia'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { handleError, createCustomError } from '@/lib/utils/errors'
import { DICTIONARY_SUCCESS } from '@/config/consts/success/sucess'
import { HandleResponse } from '@/lib/schemas/http'

import { User } from '@/users/entities/user.entity'
import { userServices } from '@/app/users/services'

export const handleDeleteUserSecurityById: Handler = async ({ params, set }): Promise<HandleResponse<User>> => {
  try {
    const { id } = params

    if (!validateMongoId(id)) {
      throw createCustomError(['INVALID_ID'])
    }

    const user = await userServices().getById(id)

    if (!user) {
      throw createCustomError(['NOT_FOUND'])
    }

    await userServices().delete({ id })

    return {
      result: { data: user },
      errors: [],
      info: {
        code: DICTIONARY_SUCCESS.USER_SECURITY.DELETE.code,
        message: DICTIONARY_SUCCESS.USER_SECURITY.DELETE.message
      }
    }
  } catch (error) {
    const response = handleError(error)
    set.status = response.errors[0].code
    return response
  }
}
