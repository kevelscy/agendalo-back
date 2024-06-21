import { Handler } from 'elysia'

import { ICreateUser, IUser, createUserSchema } from '@/app/users/models'
import { userRepository } from '@/app/users/repository'

import { validateSchema } from '@/lib/utils/validate-schema'
import { IHandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'
import { authRepository } from '../repository'

export const handleSignUp: Handler = async ({ body, set }): Promise<IHandleResponse<IUser>> => {
  const user = body as ICreateUser
  const isValidReq = validateSchema(createUserSchema, user)

  if (!isValidReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      data: null,
      info: null,
      error: DICTIONARY_ERRORS.MISSING_FIELDS,
    }
  }

  const newUser = await authRepository().createUserAccount(user)

  return {
    data: newUser,
    error: null,
    info: null
  }
}