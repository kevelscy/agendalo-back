import { prisma } from '@/lib/db/prisma/client'
import { User, UserEditInput } from '../entities/user.entity'
import { UserEditDTO } from '../dtos/user.dto'

export const updateUser = async (id: string, input: Partial<UserEditInput>): Promise<User> => {
  const validatedData = UserEditDTO.parse(input)

  // Verificar existencia
  const existingUser = await prisma.user.findUnique({ where: { id } })
  if (!existingUser) throw new Error('Usuario no encontrado')

  // Actualizar con transacción para consistencia
  return prisma.$transaction(async (tx) => {
    // Verificar conflictos de unicidad
    if (validatedData.pid || validatedData.email) {
      const conflict = await tx.user.findFirst({
        where: {
          AND: [
            { NOT: { id } },
            {
              OR: [
                { pid: validatedData.pid?.toString?.() },
                { email: validatedData.email?.toString?.() }
              ]
            }
          ]
        }
      })

      if (conflict) throw new Error('Datos únicos ya existen')
    }

    return tx.user.update({
      where: { id },
      data: validatedData,
      include: { businesses: true }
    })
  })
}