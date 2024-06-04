
import { AUTH_ROUTES } from '@/app/auth/routes'
import { createElysia } from '@/lib/utils/elysia'

export const routes = createElysia({ prefix: '/api' })
  .use(AUTH_ROUTES)