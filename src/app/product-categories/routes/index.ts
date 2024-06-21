import { Elysia } from 'elysia'

export const PRODUCT_CATEGORY_ROUTES = new Elysia()
  .get('/product-categories', () => 'GET product-categories')
  .post('/product-categories', () => 'CREATE product-category')
  .put('/product-categories/:id', () => 'UPDATE product-category')
  .get('/product-categories/:id', () => 'GET product-category by id')
  .delete('/product-categories/:id', () => 'DELETE product-category by id')
