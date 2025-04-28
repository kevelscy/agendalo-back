import { createCustomError } from '@/lib/utils/errors'
import { prisma } from '@/lib/db/prisma/client'

import { User, UserCreateInput, UserStatus } from '@/users/entities/user.entity'

export const createUser = async (input: UserCreateInput): Promise<User> => {
  const isExistUser = await prisma.user.findFirst({
    where: {
      OR: [
        { pid: input.pid },
        { email: input.email }
      ]
    }
  })

  if (isExistUser) {
    throw createCustomError(['USER_EXIST_ERROR'])
  }

  const user = await prisma.user.create({
    data: {
      pid: input.pid,
      status: UserStatus.Values.ACTIVE,
      email: input.email,
      phone: input.phone,
      lastName: input.lastName,
      firstName: input.firstName,
    },
  })

  if (!user) {
    throw createCustomError(['USER_CREATE_ERROR'])
  }

  return user
}