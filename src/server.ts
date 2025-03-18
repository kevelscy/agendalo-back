import swagger from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'

import { fixCtxRequest } from '@/lib/utils/fix-ctx-request'
import { handleErrors } from '@/lib/hooks/on-error'
// import { connectDB, disconnectDB } from '@/lib/db/prisma'
import { createElysia } from '@/lib/utils/elysia'
import { routes } from '@/routes'

export const server = createElysia()
  .use(cors())
  .derive((ctx) => fixCtxRequest(ctx.request))
  .use(swagger())
  .use(routes)
  // .onStart(connectDB)
  // .onStop(disconnectDB)
  .onError(handleErrors)