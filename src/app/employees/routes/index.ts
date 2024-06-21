import { Elysia } from 'elysia'

export const EMPLOYEE_ROUTES = new Elysia()
  .get('/employees', () => 'GET employees')
  .post('/employees', () => 'CREATE employee')
  .put('/employees/:id', () => 'UPDATE employee')
  .get('/employees/:id', () => 'GET employee by id')
  .delete('/employees/:id', () => 'DELETE employee')
