import { User, UserEditDTO, UserSchema } from '@/app/users/dtos/user.dto'
import { prisma } from '@/lib/db/prisma/client'

export const updateUser = async (id: string, input: Partial<UserEditInput>): Promise<User> => {
  const validatedData = UserSchema.partial().parse(input)

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
                { pid: validatedData.pid },
                { email: validatedData.email }
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