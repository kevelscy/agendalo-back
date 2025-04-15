import { createCustomError } from '@/lib/utils/errors'
import { prisma } from '@/lib/db/prisma/client'

import { UserSecurity, UserSecurityCreateInput } from '@/users-security/entities/user-security.entity'

export const createUserSecurity = async (input: UserSecurityCreateInput): Promise<UserSecurity> => {
  // const isExistUser = await prisma.userSecurity.findFirst({
  //   where: {
  //     OR: [
  //       { userId: input },
  //       { email: input.email }
  //     ]
  //   }
  // })

  // if (isExistUser) {
  //   throw createCustomError(['USER_EXIST_ERROR'])
  // }

  const userSecurity = await prisma.userSecurity.create({
    data: { ...input },
  })

  if (!userSecurity) {
    throw createCustomError(['USER_CREATE_ERROR'])
  }

  return userSecurity
}