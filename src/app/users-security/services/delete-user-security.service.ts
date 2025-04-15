import { prisma } from '@/lib/db/prisma/client'
import { UserSecurity } from '@/app/users-security/entities/user-security.entity'

export const deleteUserSecurity = async ({ id }: { id: string }): Promise<UserSecurity> => {
  const user = await prisma.userSecurity.findUnique({
    where: { id },
  })

  if (!user) throw new Error('Seguridad del usuario no encontrado')

  return prisma.$transaction([
    prisma.userSecurity.deleteMany({ where: { userId: id } }),
    prisma.userSecurity.delete({ where: { id } })
  ]).then(([, deletedUser]) => deletedUser)
}