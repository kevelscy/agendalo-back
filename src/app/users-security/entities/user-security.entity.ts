import { z } from 'zod'

import { UserSecuritySchema, UserSecurityCreateInputSchema, UserSecurityUpdateInputSchema } from '@/db/prisma/zod'
import { UserSecurityQueriesDTO, UserSecurityFiltersDTO } from '@/users-security/dtos/user-security.dto'

export enum USER_SECURITY_ACTIONS {
  GET = 'GET',
  EDIT = 'EDIT',
  CREATE = 'CREATE',
  DELETE = 'DELETE',
  GET_ALL = 'GET_ALL'
}

export type UserSecurity = z.infer<typeof UserSecuritySchema>
export type UserSecurityQueries = z.infer<typeof UserSecurityQueriesDTO>
export type UserSecurityFilters = z.infer<typeof UserSecurityFiltersDTO>
export type UserSecurityEditInput = z.infer<typeof UserSecurityUpdateInputSchema>
export type UserSecurityCreateInput = z.infer<Omit<typeof UserSecurityCreateInputSchema, 'user'>>
