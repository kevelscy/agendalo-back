import { Handler } from 'elysia'

import { UserCreate, User, createUserSchema } from '@/app/users/models'
import { userRepository } from '@/app/users/repository'

import { validateSchema } from '@/lib/utils/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'
import { authRepository } from '../repository'
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