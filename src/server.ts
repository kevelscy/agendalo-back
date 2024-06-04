import swagger from '@elysiajs/swagger'

import { fixCtxRequest } from '@/lib/utils/fix-ctx-request'
import { createElysia } from '@/lib/utils/elysia'
import { routes } from './routes'

export const server = createElysia()
  .derive((ctx) => fixCtxRequest(ctx.request))
  .use(swagger())
  // .onStart(connectDB)
  // .onStop(disconnectDB)
  .use(routes)
