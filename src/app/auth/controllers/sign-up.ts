import { Handler } from 'elysia'

import { validateZodDTO } from '@/lib/utils/validations/validate-schema'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'
import { HandleResponse } from '@/lib/schemas/http'

import { UserCreateDTO } from '@/app/users/dtos/user.dto'
import { SignUpInput } from '../entities/sign-up.entity'
import { authRepository } from '../services'
import { BusinessCreateDTO } from '@/app/business/dtos/business.dto'

export const handleSignUp: Handler = async ({ body, set }): Promise<HandleResponse<SignUpInput>> => {
  const payload = body as SignUpInput

  const isValidUserReq = validateZodDTO(UserCreateDTO, payload)
  const isValidBussinesReq = validateZodDTO(BusinessCreateDTO, payload)

  if (!isValidUserReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  if (!isValidBussinesReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const account = await authRepository().signUpAccount(payload)

  return {
    result: { data: account },
    errors: [],
    info: null
  }
}