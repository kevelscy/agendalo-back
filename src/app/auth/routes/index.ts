import { Elysia } from 'elysia'
import { handleSignUp } from '../controllers/sign-up'

export const AUTH_ROUTES = new Elysia({ prefix: '/auth' })
  .post('/sign-in', () => 'Sign in')
  .post('/sign-up', handleSignUp)
