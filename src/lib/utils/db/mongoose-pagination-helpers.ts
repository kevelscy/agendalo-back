import { Pagination } from '../../schemas/http'

const MAX_LIMIT_PAGINATION = 50

export const isQueryPaginationInvalid = (query: Record<string, string>) => {
  let result = false

  const limit = query['pagination[limit]']
  const page = query['pagination[page]']

  if (!limit || !page) {
    result = true
  }

  if (Number(limit) > MAX_LIMIT_PAGINATION) {
    result = true
  }

  return result
}

export const applyFilters = <W, F>(filters: F): W => {
  const where: W = null

  for (const [rawKey, values] of Object.entries(filters)) {
    if (!values?.length) continue

    // Manejar operadores especiales (ej: min_price, max_createdAt)
    const [key, operator] = rawKey.split('_')

    const processedValues = values.map(value => {
      if (!isNaN(Number(value))) return Number(value)
      if (value.match(/^\d{4}-\d{2}-\d{2}/)) return new Date(value)
      return value
    })

    if (operator) {
      switch (operator.toLowerCase()) {
        case 'min':
          where[key] = { gte: Math.min(...processedValues) }
          break
        case 'max':
          where[key] = { lte: Math.max(...processedValues) }
          break
        case 'in':
        default:
          where[key] = { in: processedValues }
      }
    } else {
      where[key] = { in: processedValues }
    }
  }

  return where
}


export const applyQueries = <W, Q>(queries: Q): Partial<W> => {
  const where: Partial<W> = {};

  for (const [rawKey, value] of Object.entries(queries)) {
    if (!value?.trim()) continue;

    // Manejar operadores especiales (ej: price_gt, createdAt_lt)
    const [key, operator] = rawKey.split('_');
    const field = key as keyof W

    const numericValue = Number(value);
    const isNumber = !isNaN(numericValue);

    switch (operator?.toLowerCase()) {
      case 'gt':
        Object.assign(where, {
          [field]: { gt: isNumber ? numericValue : value }
        } as Partial<W>)
        break;
      case 'lt':
        Object.assign(where, {
          [field]: { lt: isNumber ? numericValue : value }
        } as Partial<W>);
        break;
      case 'gte':
        Object.assign(where, {
          [field]: { gte: isNumber ? numericValue : value }
        } as Partial<W>);
        break;
      case 'lte':
        Object.assign(where, {
          [field]: { lte: isNumber ? numericValue : value }
        } as Partial<W>);
        break;
      default:
        if (key === 'search') {
          Object.assign(where, {
            OR: [
              { name: { contains: value, mode: 'insensitive' } },
              { email: { contains: value, mode: 'insensitive' } }
            ]
          } as any)
        } else {
          Object.assign(where, {
            [field]: { contains: value, mode: 'insensitive' }
          } as Partial<W>);
        }
    }
  }

  return where;
};

// Función para generar parámetros de paginación
export const paginate = (pagination: Partial<Pagination>) => {
  const page = pagination.page || 1
  const limit = pagination.limit || 10

  return {
    skip: (page - 1) * limit,
    take: limit,
    currentPage: page,
    limit
  }
}

type GeneratePaginationResponse = ({ limit, page, count }: { limit: number, page: number, count: number }) => Pagination

export const generatePaginationResponse: GeneratePaginationResponse = ({ limit, page, count }) => ({
  page,
  count,
  limit,
  hasPrevPage: page > 1,
  hasNextPage: count > page * limit
})







// MONGOOSE
// export function applyQueries<T extends Record<string, any>>(queries: T): Record<string, any> {
//   const query: Record<string, any> = {}

//   Object.keys(queries).forEach((key) => {
//     if (queries[key]) {
//       query[key] = { $regex: new RegExp(queries[key], 'i') } // Búsqueda case-insensitive
//     }
//   })

//   return query
// }

// export function applyFilters<T extends Record<string, any>>(filters: T): Record<string, Partial<T>> {
//   const filterQuery: Record<string, any> = {}

//   Object.keys(filters).forEach((key) => {
//     if (Array.isArray(filters[key]) && filters[key].length > 0) {
//       filterQuery[key] = { $in: filters[key] }
//     }
//   })

//   return filterQuery
// }

// export function generatePaginationResponse(limit: number, page: number, count: number): Pagination {
//   return {
//     page,
//     count,
//     limit,
//     hasPrevPage: page > 1,
//     hasNextPage: page * limit < count
//   }
// }

// export function paginate({ limit, page }: Omit<Pagination, 'hasNextPage' | 'hasPrevPage'>) {
//   const skip = (page - 1) * limit
//   return { limit, skip }
// }