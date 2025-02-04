import { Handler } from 'elysia'

import { UserCreate, User, createUserSchema } from '@/app/users/models'
import { userRepository } from '@/app/users/repository'

import { validateSchema } from '@/lib/utils/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleCreateUser: Handler = async ({ body, set }): Promise<HandleResponse<User>> => {
  const user = body as UserCreate
  const isValidReq = validateSchema(createUserSchema, user)

  if (!isValidReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const newUser = await userRepository().create(user)

  return {
    result: { data: newUser },
    errors: [],
    info: null
  }
}