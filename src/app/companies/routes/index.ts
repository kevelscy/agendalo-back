import { verifyToken } from '@/lib/middlewares/verify-token'
import bearer from '@elysiajs/bearer'
import { Elysia } from 'elysia'

export const COMPANY_ROUTES = new Elysia()
  .use(bearer())
  .onBeforeHandle(verifyToken)
  .get('/companies', () => 'GET companies')
  .post('/companies', () => 'CREATE company')
  .put('/companies/:id', () => 'UPDATE company')
  .get('/companies/:id', () => 'GET company by id')
  .delete('/companies/:id', () => 'DELETE company')
