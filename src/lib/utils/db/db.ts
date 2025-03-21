import { prisma } from '@/db/prisma/client'
import { Prisma } from '@prisma/client'

// Para manejar relaciones complejas en updates
export const transactionalUpdate = async <T>(id: string, updateFn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> => {
  return prisma.$transaction(async (tx) => {
    const exists = await tx.user.findUnique({ where: { id } });
    if (!exists) throw new Error('Registro no encontrado');
    return updateFn(tx);
  });
};

// Para paginación segura
export const safePagination = (page: number, limit: number) => ({
  skip: Math.max(0, (page - 1) * limit),
  take: Math.min(Math.max(1, limit), 100) // Límite máximo de 100
});