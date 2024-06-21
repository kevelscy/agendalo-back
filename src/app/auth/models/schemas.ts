import { z } from 'zod'

export const userSecurity = z.object({
  password: z.string(),
  token: z.string().optional(),
})

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  pid: z.string().optional(),
  photo: z.string().optional(),
  security: userSecurity.optional()
})

export const createUserSchema = userSchema.omit({ security: true }).extend({
  password: z.string()
})

export const updateUserSchema = userSchema.extend({})

export interface IUser extends z.infer<typeof userSchema> { }
export interface ICreateUser extends z.infer<typeof createUserSchema> { }
export interface IUpdateUser extends z.infer<typeof updateUserSchema> { }

export interface IUserSecurity extends z.infer<typeof userSecurity> { }
