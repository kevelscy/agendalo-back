import { Handler } from 'elysia'

import { validateSchema } from '@/lib/utils/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

import { Bussiness, BussinessCreate, bussinessCreateSchema } from '../models'
import { bussinessRepository } from '../repository'

export const handleCreateBussiness: Handler = async ({ body, set, headers }): Promise<HandleResponse<Bussiness>> => {
  const { bussines } = headers

  const bussiness: BussinessCreate = {
    ...body as BussinessCreate
  }

  const isValidReq = await validateSchema(bussinessCreateSchema, bussiness)

  if (!isValidReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const newBussiness = await bussinessRepository().create(bussiness)

  return {
    result: { data: newBussiness },
    errors: [],
    info: null
  }
}