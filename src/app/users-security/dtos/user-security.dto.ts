import { UserSecuritySchema, UserSecurityUpdateInputSchema, UserSecurityCreateInputSchema } from '@/db/prisma/zod'

export const UserSecurityQueriesDTO = UserSecuritySchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true,
})

export const UserSecurityFiltersDTO = UserSecuritySchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true,
  token: true,
  password: true,
})

export const UserSecurityCreateDTO = UserSecurityCreateInputSchema
export const UserSecurityEditDTO = UserSecurityUpdateInputSchema
