import { prisma } from '@/lib/db/prisma/client'
import { User } from '@/lib/db/prisma/zod'

type GetUserOptions = {
  includeRelations?: boolean
}

export const getUser = async (id: string, options: GetUserOptions = {}): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      businesses: options.includeRelations,
      appointments: options.includeRelations,
      security: options.includeRelations
    }
  })
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
    include: { security: true }
  })
}