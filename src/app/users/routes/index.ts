import { bearer } from '@elysiajs/bearer'
import { Elysia } from 'elysia'

import { handleGetUserById } from '@/app/users/handlers/get-user-by-id'
import { handleGetAllUsers } from '@/app/users/handlers/get-all-users'
import { handleCreateUser } from '@/app/users/handlers/create-user'
import { handleUpdateUser } from '@/app/users/handlers/update-user'
import { verifyToken } from '@/lib/middlewares/verify-token'

export const USER_ROUTES = new Elysia()
  .use(bearer())
  .onBeforeHandle(verifyToken)
  .get('/users', handleGetAllUsers)
  .post('/users', handleCreateUser)
  .put('/users/:id', handleUpdateUser)
  .get('/users/:id', () => handleGetUserById)
  .delete('/users/:id', () => 'DELETE User')
