import { Handler } from 'elysia'

import { UserCreateDTO, User, createUserSchema } from '@/app/users/dtos/user.dto'
import { userServices } from '@/app/users/services'

import { validateSchema } from '@/lib/utils/validations/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'
import { authRepository } from '../services'
import { SignUpPayload } from '../models'

export const handleSignUp: Handler = async ({ body, set }): Promise<HandleResponse<SignUpPayload>> => {
  const signUpPayload = body as SignUpPayload

  const isValidReq = validateSchema(createUserSchema, signUpPayload)

  if (!isValidReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const account = await authRepository().signUpAccount(signUpPayload)

  return {
    result: { data: account },
    errors: [],
    info: null
  }
}