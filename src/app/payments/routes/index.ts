import { Elysia } from 'elysia'

export const PAYMENT_ROUTES = new Elysia()
  .get('/payments', () => 'GET payments')
  .post('/payments', () => 'CREATE payment')
  .put('/payments/:id', () => 'UPDATE payment')
  .get('/payments/:id', () => 'GET payment by id')
