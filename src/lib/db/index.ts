import { connect, disconnect } from 'mongoose'
import { env } from '@/lib/env'

let db: typeof import('mongoose') | null = null

export const connectDB = async () => {
  connect(env.DATABASE_URL)
    .then(database => db = database)
    .then(() => console.log('💾 Connection to database success!'))
    .catch(console.error.bind(console, 'Connection to database error:'))
}

export const disconnectDB = async () => {
  await disconnect()
}

export { db }
