import { Handler } from 'elysia'

import { validateMongoId } from '@/lib/middlewares/validate-mongodb-id'
import { HandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'
import { productRepository } from '../repository'
import { ProductEdit } from '../models'

export const handleEditProduct: Handler = async ({ body, set, params, headers }): Promise<HandleResponse<ProductEdit>> => {
  const product = body as ProductEdit
  const { bussines } = headers
  const { id } = params

  const isValidId = validateMongoId(id)

  if (!isValidId) {
    set.status = DICTIONARY_ERRORS.INVALID_ID.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.INVALID_ID }],
    }
  }

  if (!product) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const newUser = await productRepository({ bussines }).update(id, product)

  return {
    result: { data: newUser },
    errors: null,
    info: null
  }
}