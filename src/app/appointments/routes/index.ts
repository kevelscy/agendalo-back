import { Elysia } from 'elysia'

import { handleCreateAppointment } from '../handlers/create-appointment'

export const APPOINTMENTS_ROUTES = new Elysia({ prefix: '/appointments' })
  .get('/', () => 'GET')
  .get('/:id', () => 'GET')
  .post('/', handleCreateAppointment)
  .put('/', handleCreateAppointment)
