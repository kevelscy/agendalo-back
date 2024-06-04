import { server } from '@/server'
import { env } from '@/lib/env'

server.listen({ port: env.PORT }, ({ hostname, port }) => {
  const url = env.NODE_ENV === 'production' ? 'https' : 'http'

  console.log(`🦊 Elysia is running at ${url}://${hostname}:${port}`)
})