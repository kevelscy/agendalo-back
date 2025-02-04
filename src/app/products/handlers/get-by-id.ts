import { Handler } from 'elysia'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'
import { productRepository } from '../repository'
import { Product } from '../models'

export const handleGetProductById: Handler = async ({ params, set, headers }): Promise<HandleResponse<Product>> => {
  const { bussines } = headers

  try {
    const { id } = params
    const product = await productRepository({ bussines }).getById(id)

    const isValidId = validateMongoId(id)

    if (!isValidId) {
      set.status = DICTIONARY_ERRORS.INVALID_ID.code

      return {
        result: null,
        info: null,
        errors: [{ ...DICTIONARY_ERRORS.INVALID_ID }],
      }
    }

    return {
      result: { data: product },
      errors: [],
      info: null
    }

  } catch (error) {
    set.status = DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE.code

    return {
      errors: [{ ...DICTIONARY_ERRORS.ERROR_TO_GET_RESOURCE }],
      result: null,
      info: null
    }
  }
}