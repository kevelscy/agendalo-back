import { z } from 'zod'

export enum UserStatus {
  ACTIVATE = 'ACTIVATE',
  INACTIVATE = 'INACTIVATE'
}

export const userStatusSchema = z.nativeEnum(UserStatus)

export const userSecurity = z.object({
  password: z.string(),
  token: z.string().optional(),
})

export const userSchema = z.object({
  email: z.string(),
  lastName: z.string(),
  firstName: z.string(),
  status: userStatusSchema,
  pid: z.string().optional(),
  photo: z.string().optional(),
  security: userSecurity.optional()
})

export const createUserSchema = userSchema.omit({ security: true }).extend({
  password: z.string()
})

export const updateUserSchema = userSchema.extend({})

export const USER_QUERIES = userSchema.extend({}).omit({
  pid: true,
  photo: true,
  status: true,
  security: true
})

export const USER_FILTERS = userSchema.extend({}).omit({
  email: true,
  lastName: true,
  firstName: true,
  pid: true,
  photo: true,
  security: true,
})

export interface UserQueries extends z.infer<typeof USER_QUERIES> { }
export interface UserFilters extends z.infer<typeof USER_FILTERS> { }

export interface User extends z.infer<typeof userSchema> { }
export interface UserEdit extends z.infer<typeof updateUserSchema> { }
export interface UserCreate extends z.infer<typeof createUserSchema> { }

export interface UserSecurity extends z.infer<typeof userSecurity> { }
