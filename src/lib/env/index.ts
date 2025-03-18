import { z } from 'zod'

const envVariables = z.object({
  PORT: z.coerce.number().default(3000),
  RUNTIME: z.enum(['bun', 'edge']).default('bun'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
})

export const env = envVariables.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  RUNTIME: process.env.RUNTIME,
  NODE_ENV: process.env.NODE_ENV
})
