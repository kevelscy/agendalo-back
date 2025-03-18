// import { PrismaClient } from '@prisma/client'
// import { PrismaLibSQL } from '@prisma/'
// import { createClient } from '@libsql/client'

// const libsql = createClient({
//   url: `${process.env.TURSO_DATABASE_URL}`,
//   authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// })

// const adapter = new PrismaLibSQL(libsql)
// export const prisma = new PrismaClient({ adapter }).$extends({
//   query: {
//     $allModels: {
//       async $allOperations({ operation, model, args, query }) {
//         const result = await query(args)

//         // Synchronize the embedded replica after any write operation
//         if (['create', 'update', 'delete'].includes(operation)) {
//           await libsql.sync()
//         }

//         return result
//       }
//     }
//   }
// })

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()