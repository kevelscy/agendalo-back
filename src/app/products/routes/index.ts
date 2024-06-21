import { Elysia } from 'elysia'

export const PRODUCT_ROUTES = new Elysia()
  .get('/products', () => 'GET products')
  .post('/products', () => 'CREATE product')
  .put('/products/:id', () => 'UPDATE product')
  .get('/products/:id', () => 'GET product by id')
  .delete('/products/:id', () => 'DELETE product by id')
