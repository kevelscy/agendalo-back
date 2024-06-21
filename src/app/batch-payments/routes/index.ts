import { Elysia } from 'elysia'

export const BATCH_PAYMENT_ROUTES = new Elysia()
  .get('/batch-payments', () => 'GET batch-payments')
  .post('/batch-payments', () => 'CREATE batch-payment')
  .put('/batch-payments/:id', () => 'UPDATE batch-payment')
  .get('/batch-payments/:id', () => 'GET batch-payment by id')
  .delete('/batch-payments/:id', () => 'DELETE batch-payment by id')
