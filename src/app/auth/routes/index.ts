import { Elysia } from 'elysia'

export const AUTH_ROUTES = new Elysia({ prefix: '/auth' })
  .post('/sign-in', () => 'Sign in')
  .post('/sign-up', () => 'Sign up')
