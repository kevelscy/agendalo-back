
import { PRODUCT_CATEGORY_ROUTES } from '@/app/product-categories/routes'
import { EMPLOYEE_ROUTES } from '@/app/employees/routes'
import { COMPANY_ROUTES } from '@/app/bussiness/routes'
import { PAYMENT_ROUTES } from '@/app/payments/routes'
import { PRODUCT_ROUTES } from '@/app/products/routes'
import { HEALTH_ROUTES } from '@/app/healthz/routes'
import { USER_ROUTES } from '@/app/users/routes'
import { AUTH_ROUTES } from '@/app/auth/routes'

import { createElysia } from '@/lib/utils/elysia'

export const routes = createElysia({ prefix: '/api' })
  .use(AUTH_ROUTES)
  .use(USER_ROUTES)
  .use(COMPANY_ROUTES)
  .use(EMPLOYEE_ROUTES)
  .use(PAYMENT_ROUTES)
  .use(PRODUCT_ROUTES)
  .use(PRODUCT_CATEGORY_ROUTES)
  .use(HEALTH_ROUTES)