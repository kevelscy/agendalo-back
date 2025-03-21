import { bearer } from '@elysiajs/bearer'
import { Elysia } from 'elysia'

import { handleGetUserById } from '@/app/users/controllers/get-user.controller'
import { handleGetAllUsers } from '@/app/users/controllers/get-all-users.controller'
import { handleCreateUser } from '@/app/users/controllers/create-user.controller'
import { handleUpdateUser } from '@/app/users/controllers/update-user.controller'
import { verifyToken } from '@/lib/middlewares/verify-token'

export const USER_ROUTES = new Elysia()
  .use(bearer())
  .onBeforeHandle(verifyToken)
  .get('/users', handleGetAllUsers)
  .post('/users', handleCreateUser)
  .put('/users/:id', handleUpdateUser)
  .get('/users/:id', () => handleGetUserById)
  .delete('/users/:id', () => 'DELETE User')
