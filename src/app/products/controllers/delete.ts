import { Handler } from 'elysia'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'

import { productRepository } from '../services'
import { Product } from '../models'

export const handleDeleteProductById: Handler = async ({ params, set, headers }): Promise<HandleResponse<Product>> => {
  const { bussines } = headers

  try {
    const { id } = params
    const product = await productRepository({ bussines }).delete(id)

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