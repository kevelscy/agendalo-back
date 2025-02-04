import { Handler } from 'elysia'

import { isQueryPaginationInvalid } from '@/lib/utils/pagination-helpers'
import { formatResponse } from '@/lib/utils/format-response'
import { DICTIONARY_SUCCESS } from '@/config/sucess'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'
import { bussinessRepository } from '../repository'
import { Bussiness } from '../models'

export const handleGetAllBussiness: Handler = async ({ set, query, headers }): Promise<HandleResponse<Bussiness[]>> => {
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

  const paginationInfo = {
    limit: Number(query.limit),
    page: Number(query.page),
  }

  const { data, pagination } = await bussinessRepository().getAll({ ...query, pagination: paginationInfo })

  const response = formatResponse({
    data,
    pagination,
    message: DICTIONARY_SUCCESS.PRODUCTS.GET_ALL.message,
    status: DICTIONARY_SUCCESS.PRODUCTS.GET_ALL.code
  });

  return response
}