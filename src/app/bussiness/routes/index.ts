import bearer from '@elysiajs/bearer'
import { Elysia } from 'elysia'

import { verifyToken } from '@/lib/middlewares/verify-token'

import { handleCreateBussiness } from '../controllers/create'
import { handleGetAllBussiness } from '../controllers/get-all'

export const COMPANY_ROUTES = new Elysia()
  .use(bearer())
  .onBeforeHandle(verifyToken)
  .get('/bussiness', handleGetAllBussiness)
  .post('/bussiness', handleCreateBussiness)
  .put('/bussiness/:id', () => 'UPDATE company')
  .get('/bussiness/:id', () => 'GET company by id')
  .delete('/bussiness/:id', () => 'DELETE company')
