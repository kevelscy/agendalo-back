import { prisma } from '@/lib/db/prisma/client'
import { User } from '@/app/users/entities/user.entity'

export const deleteUser = async ({ id }: { id: string }): Promise<User> => {
  // Verificar existencia primero
  const user = await prisma.user.findUnique({
    where: { id },
    include: { businesses: true }
  })

  if (!user) throw new Error('Usuario no encontrado')
  if (user.businesses?.length > 0) {
    throw new Error('No se puede eliminar usuario con negocios asociados')
  }

  // Transacción para eliminar datos relacionados
  return prisma.$transaction([
    prisma.userSecurity.deleteMany({ where: { userId: id } }),
    prisma.user.delete({ where: { id } })
  ]).then(([, deletedUser]) => deletedUser)
}