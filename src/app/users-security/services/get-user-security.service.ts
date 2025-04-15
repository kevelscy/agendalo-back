import { prisma } from '@/lib/db/prisma/client'
import { User } from '@/lib/db/prisma/zod'

type GetUserOptions = {
  includeRelations?: boolean
}

export const getUserSecurity = async (id: string, options: GetUserOptions = {}): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      businesses: options.includeRelations,
      appointments: options.includeRelations,
      security: options.includeRelations
    }
  })
}
