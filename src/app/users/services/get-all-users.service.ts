import { Prisma } from '@prisma/client'

import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/db/mongoose-pagination-helpers'
import { User, UserFilters, UserQueries } from '../dtos/user.dto'

import { Filters, Params, Queries, Result } from '@/lib/schemas/http'
import { isObjectEmpty } from '@/lib/utils/validations/is-object-empty'
import { prisma } from '@/lib/db/prisma/client'

type UserWhereInput = Prisma.UserWhereInput

export const getAllUsers = async (params: Params<UserQueries, UserFilters> = {}): Promise<Result<User[]>> => {
  const { pagination = {}, filters = {}, queries = {} } = params

  let filterWhere: UserWhereInput = null
  let queryWhere: UserWhereInput = null

  if (!isObjectEmpty(filters)) {
    filterWhere = applyFilters<UserWhereInput, Filters<UserFilters>>(filters)
  }

  if (!isObjectEmpty(queries)) {
    queryWhere = applyQueries<UserWhereInput, Queries<UserQueries>>(queries)
  }

  const where: UserWhereInput = { AND: [filterWhere, queryWhere] }

  const { skip, take, currentPage, limit } = paginate(pagination)

  const [data, totalCount] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' } // Ejemplo de ordenamiento
    }),
    prisma.user.count({ where })
  ])

  return {
    data,
    pagination: generatePaginationResponse({ limit, page: currentPage, count: totalCount })
  }
}