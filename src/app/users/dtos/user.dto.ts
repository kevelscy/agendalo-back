import { UserSchema, UserCreateInputSchema, UserUpdateInputSchema } from '@/db/prisma/zod'

export const UserQueriesDTO = UserSchema.omit({
  photo: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  role: true,
  id: true,
})

export const UserFiltersDTO = UserSchema.omit({
  email: true,
  lastName: true,
  firstName: true,
  photo: true,
  createdAt: true,
  updatedAt: true,
  role: true,
  id: true,
  pid: true,
  phone: true
})

export const UserCreateDTO = UserCreateInputSchema
export const UserEditDTO = UserUpdateInputSchema
