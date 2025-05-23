import { Handler } from 'elysia'

import { createUserSchema } from '@/app/users/dtos/user.dto'

import { validateZodDTO } from '@/lib/utils/validations/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'
import { authRepository } from '../services'
import { SignUpPayload } from '../models'

export const handleCreateAppointment: Handler = async ({ body, set }): Promise<HandleResponse<SignUpPayload>> => {
  const signUpPayload = body as SignUpPayload

  const isValidReq = validateZodDTO(createUserSchema, signUpPayload)

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