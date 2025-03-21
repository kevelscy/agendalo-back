// create-user.controller.ts
import { Handler } from 'elysia'

import { validateSchema } from '@/lib/utils/validations/validate-schema'
import { createCustomError } from '@/lib/utils/errors'
import { HandleResponse } from '@/lib/schemas/http'

import { User, UserCreateInput } from '@/users/entities/user.entity'
import { UserCreateDTO } from '@/app/users/dtos/user.dto'
import { userServices } from '@/app/users/services'

export const handleCreateUser: Handler = async ({ body, set }): Promise<HandleResponse<User>> => {
  const user = body as UserCreateInput

  const isValidReq = validateSchema(UserCreateDTO, user)

  if (!isValidReq) {
    throw createCustomError(['MISSING_FIELDS'], set)
  }

  const newUser = await userServices().create(user)

  if (!newUser) {
    throw createCustomError(['USER_CREATE_ERROR'], set)
  }

  return {
    result: { data: newUser },
    errors: [],
    info: null
  }
}