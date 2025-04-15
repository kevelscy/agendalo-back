// user.entity.ts
import { z } from 'zod'

import { UserCreateInputSchema, UserSchema, UserStatusSchema, UserUpdateInputSchema, UserRoleSchema } from '@/db/prisma/zod'
import { UserFiltersDTO, UserQueriesDTO } from '@/users/dtos/user.dto'

export enum USER_ACTIONS {
  GET = 'GET',
  EDIT = 'EDIT',
  CREATE = 'CREATE',
  DELETE = 'DELETE',
  GET_ALL = 'GET_ALL'
}

export type User = z.infer<typeof UserSchema>
export type UserQueries = z.infer<typeof UserQueriesDTO>
export type UserFilters = z.infer<typeof UserFiltersDTO>
export type UserEditInput = z.infer<typeof UserUpdateInputSchema>
export type UserCreateInput = z.infer<typeof UserCreateInputSchema>

export {
  UserStatusSchema as UserStatus,
  UserRoleSchema as UserRole
}
