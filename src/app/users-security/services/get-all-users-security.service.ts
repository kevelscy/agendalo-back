import { Prisma } from '@prisma/client'

import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/db/mongoose-pagination-helpers'
import { isObjectEmpty } from '@/lib/utils/validations/is-object-empty'
import { Filters, Params, Queries, Result } from '@/lib/schemas/http'
import { prisma } from '@/lib/db/prisma/client'

import { UserSecurity, UserSecurityFilters, UserSecurityQueries } from '@/users-security/entities/user-security.entity'

type UserWhereInput = Prisma.UserSecurityWhereInput

export const getAllUsersSecurity = async (params: Params<UserSecurityQueries, UserSecurityFilters> = {}): Promise<Result<UserSecurity[]>> => {
  const { pagination = {}, filters = {}, queries = {} } = params

  let filterWhere: UserWhereInput = null
  let queryWhere: UserWhereInput = null

  if (!isObjectEmpty(filters)) {
    filterWhere = applyFilters<UserWhereInput, Filters<UserSecurityFilters>>(filters)
  }

  if (!isObjectEmpty(queries)) {
    queryWhere = applyQueries<UserWhereInput, Queries<UserSecurityQueries>>(queries)
  }

  const where: UserWhereInput = { AND: [filterWhere, queryWhere] }

  const { skip, take, currentPage, limit } = paginate(pagination)

  const [data, totalCount] = await prisma.$transaction([
    prisma.userSecurity.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' } // Ejemplo de ordenamiento
    }),
    prisma.userSecurity.count({ where })
  ])

  return {
    data,
    pagination: generatePaginationResponse({ limit, page: currentPage, count: totalCount })
  }
}