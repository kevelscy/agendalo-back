import { Handler } from 'elysia'

import { userRepository } from '@/app/users/repository'
import { User } from '@/app/users/models'

import { isQueryPaginationInvalid } from '@/lib/utils/pagination-helpers'
import { formatResponse } from '@/lib/utils/format-response'
import { DICTIONARY_SUCCESS } from '@/config/sucess'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

export const handleGetAllUsers: Handler = async ({ set, query }): Promise<HandleResponse<User[]>> => {
  const invalidPagination = isQueryPaginationInvalid(query)

  if (invalidPagination) {
    set.status = DICTIONARY_ERRORS.PAGINATION_INVALID.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.PAGINATION_INVALID }],
    }
  }

  const paginationInfo = {
    limit: Number(query.limit),
    page: Number(query.page),
  }

  const { data, pagination } = await userRepository().getAll({ ...query, pagination: paginationInfo })

  const response = formatResponse({
    data,
    pagination,
    message: DICTIONARY_SUCCESS.USERS.GET_ALL.message,
    status: DICTIONARY_SUCCESS.USERS.GET_ALL.code
  });

  return response
}