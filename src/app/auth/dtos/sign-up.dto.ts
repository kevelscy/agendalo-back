import { z } from 'zod'

import { BusinessSchema, UserSchema } from '@/lib/db/prisma/zod'
import { UserSecurityCreateDTO } from '@/app/users-security/dtos/user-security.dto'

export const signUpInputSchema = z.object({
  owner: UserSecurityCreateDTO.and(UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })),

  business: BusinessSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })
})
