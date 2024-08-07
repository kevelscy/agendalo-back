import { DICTIONARY_ERRORS } from '@/config/errors'
import { Pagination } from '../schemas/http'

const MAX_LIMIT_PAGINATION = 50

export function paginate({ limit, page }: Omit<Pagination, 'hasNextPage' | 'hasPrevPage'>) {
  const skip = (page - 1) * limit
  return { limit, skip }
}

export function generatePaginationResponse(limit: number, page: number, count: number) {
  return {
    page,
    count,
    limit,
    hasPrevPage: page > 1,
    hasNextPage: page * limit < count
  }
}

export function applyQueries<T extends Record<string, any>>(queries: T): Record<string, any> {
  const query: Record<string, any> = {}

  console.log({ queries })

  Object.keys(queries).forEach((key) => {
    if (queries[key]) {
      query[key] = { $regex: new RegExp(queries[key], 'i') } // Búsqueda case-insensitive
    }
  })

  return query
}

export function applyFilters<T extends Record<string, any>>(filters: T): Record<string, any> {
  const filterQuery: Record<string, any> = {}

  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key]) && filters[key].length > 0) {
      filterQuery[key] = { $in: filters[key] }
    }
  })

  return filterQuery
}


export const isQueryPaginationInvalid = (query: Record<string, string>) => {
  let result = false

  if (!query?.limit || !query?.page) {
    result = true
  }

  if (Number(query.limit) > MAX_LIMIT_PAGINATION) {
    result = true
  }

  return result
}
