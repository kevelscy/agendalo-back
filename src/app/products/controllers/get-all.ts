import { Handler } from 'elysia'

import { fromQueryString } from '@/lib/utils/formaters/convert-query-string-to-object'
import { isQueryPaginationInvalid } from '@/lib/utils/db/mongoose-pagination-helpers'
import { formatResponse } from '@/lib/utils/formaters/format-response'
import { DICTIONARY_SUCCESS } from '@/config/consts/success/sucess'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'
import { productRepository } from '../services'
import { Product } from '../models'

export const handleGetAllProducts: Handler = async ({ set, query, headers }): Promise<HandleResponse<Product[]>> => {
  const { bussines } = headers

  const invalidPagination = isQueryPaginationInvalid(query)

  if (invalidPagination) {
    set.status = DICTIONARY_ERRORS.PAGINATION_INVALID.code

    return {
      result: null,
      info: null,
      errors: [DICTIONARY_ERRORS.PAGINATION_INVALID],
    }
  }

  const queryStringObject = fromQueryString(query) as {
    pagination: { limit: number, page: number }
    filters: { status: string[] }
    queries: { name: string }
  }

  const { data, pagination } = await productRepository({ bussines }).getAll({ ...queryStringObject })

  const response = formatResponse({
    data,
    pagination,
    message: DICTIONARY_SUCCESS.PRODUCTS.GET_ALL.message,
    status: DICTIONARY_SUCCESS.PRODUCTS.GET_ALL.code
  });

  return response
}