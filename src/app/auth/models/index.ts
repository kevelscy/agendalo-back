import { z } from 'zod'

import { bussinessCreateSchema } from '@/app/bussiness/models'
import { userSchema } from '@/app/users/models'

export const signUpSchema = z.object({
  bussiness: bussinessCreateSchema,
  owner: userSchema
})

export interface SignUpPayload extends z.infer<typeof signUpSchema> { }
