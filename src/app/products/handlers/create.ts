import { Handler } from 'elysia'

import { validateSchema } from '@/lib/utils/validate-schema'
import { IHandleResponse } from '@/lib/schemas/http'
import { DICTIONARY_ERRORS } from '@/config/errors'

import { Product, ProductCreate, productCreateSchema } from '../models'
import { productRepository } from '../repository'

export const handleCreateProduct: Handler = async ({ body, set, headers }): Promise<IHandleResponse<Product>> => {
  const { bussines } = headers

  const product: ProductCreate = {
    ...body as ProductCreate,
    price: Number((body as any).price)
  }

  const isValidReq = await validateSchema(productCreateSchema, product)

  if (!isValidReq) {
    set.status = DICTIONARY_ERRORS.MISSING_FIELDS.code

    return {
      result: null,
      info: null,
      errors: [{ ...DICTIONARY_ERRORS.MISSING_FIELDS }],
    }
  }

  const newUser = await productRepository({ bussines }).create(product)

  return {
    result: { data: newUser },
    errors: [],
    info: null
  }
}