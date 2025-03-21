import bearer from '@elysiajs/bearer'
import { Elysia } from 'elysia'

import { verifyBussines } from '@/lib/middlewares/verify-bussines'
import { verifyToken } from '@/lib/middlewares/verify-token'
import { handleGetAllProducts } from '../controllers/get-all'
import { handleCreateProduct } from '../controllers/create'

export const PRODUCT_ROUTES = new Elysia()
  .use(bearer())
  .onBeforeHandle(verifyToken)
  .onBeforeHandle(verifyBussines)
  .get('/products', handleGetAllProducts)
  .post('/products', handleCreateProduct)
  .put('/products/:id', () => 'UPDATE product')
  .get('/products/:id', () => 'GET product by id')
  .delete('/products/:id', () => 'DELETE product by id')
