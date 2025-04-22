import { Handler } from 'elysia'

import { validateZodDTO } from '@/lib/utils/validations/validate-schema'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'

import { Business, BusinessCreateInput } from '@/business/entities/business.entity'
import { bussinessRepository } from '@/business/services'
import { BusinessCreateDTO } from '@/business/dtos/business.dto'

export const handleCreateBussiness: Handler = async ({ body, set, headers }): Promise<HandleResponse<Business>> => {
  const { owner } = headers

  const bussiness: BusinessCreateInput = {
    ...body as BusinessCreateInput
  }

  const isValidReq = await validateZodDTO(BusinessCreateDTO, bussiness)

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