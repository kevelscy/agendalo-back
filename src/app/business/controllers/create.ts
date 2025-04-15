import { Handler } from 'elysia'

import { validateZodDTO } from '@/lib/utils/validations/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'

import { Bussiness, BussinessCreate, bussinessCreateSchema } from '../entities'
import { bussinessRepository } from '../services'

export const handleCreateBussiness: Handler = async ({ body, set, headers }): Promise<HandleResponse<Bussiness>> => {
  const { bussines } = headers

  const bussiness: BussinessCreate = {
    ...body as BussinessCreate
  }

  const isValidReq = await validateZodDTO(bussinessCreateSchema, bussiness)

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