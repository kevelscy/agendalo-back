
import { AUTH_ROUTES } from '@/app/auth/routes'
import { USER_ROUTES } from '@/app/users/routes'

import { createElysia } from '@/lib/utils/elysia'

export const routes = createElysia({ prefix: '/api' })
  .use(AUTH_ROUTES)
  .use(USER_ROUTES)