import { Elysia } from 'elysia'

export const HEALTH_ROUTES = new Elysia()
  .post('/ healthz', () => 'health')
