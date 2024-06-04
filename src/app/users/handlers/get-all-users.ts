import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { IUser } from '@/app/users/models'

import { IHandleResponse } from '@/lib/schemas/http'

export const handleGetAllUsers: Handler = async ({ set }): Promise<IHandleResponse<IUser[]>> => {
  const users = await userRepository().getAll()

  return {
    data: users,
    error: null,
    info: null
  }
}