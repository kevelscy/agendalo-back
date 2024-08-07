import { IHandleResponse, Pagination, Result } from '../schemas/http'

interface FormatResponseParams<T> {
  data: T
  status: number
  message: string
  pagination?: Pagination
}

export const formatResponse = <T>({ data, message, pagination, status }: FormatResponseParams<T>): IHandleResponse<T> => {
  const result: Result<T> = { data }

  result.pagination = pagination

  return {
    info: { code: status, message },
    errors: [],
    result
  };
}