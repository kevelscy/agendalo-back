import { z } from 'zod'

import { commonSchemas } from '@/lib/schemas/common'

const { string, number } = commonSchemas()

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DRAFT = 'DRAFT',
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  ON_HOLD = 'ON_HOLD',
  SOLD_OUT = 'SOLD_OUT',
}

export const productStatusSchema = z.nativeEnum(ProductStatus)

export const productImage = z.object({
  url: z.string().url(),
  metadata: z.record(string, z.any()).optional()
})

export const productCategorySchema = z.object({
  id: string,
  name: string,
  color: string,
  description: string
})

export const productSchema = z.object({
  id: string,
  name: string,
  price: number,
  status: productStatusSchema,
  description: string.optional(),
  images: z.array(productImage).optional(),
  category: productCategorySchema.optional()
})

export const productEditSchema = productSchema.extend({}).omit({
  id: true,
  images: true
})

export const productCreateSchema = productSchema.extend({
  firstImage: z.any().optional(),
  secondImage: z.any().optional(),
  thirdImage: z.any().optional(),
  fourthImage: z.any().optional(),
}).omit({
  id: true,
  images: true,
})

export const PRODUCT_QUERIES_SCHEMA = z.object({
  name: string
})

export const PRODUCT_FILTERS_SCHEMA = z.object({
  status: z.array(string)
})

export interface ProductQueries extends z.infer<typeof PRODUCT_QUERIES_SCHEMA> { }
export interface ProductFilters extends z.infer<typeof PRODUCT_FILTERS_SCHEMA> { }

export interface ProductCategory extends z.infer<typeof productCategorySchema> { }

export interface Product extends z.infer<typeof productSchema> { }
export interface ProductImage extends z.infer<typeof productImage> { }
export interface ProductEdit extends z.infer<typeof productEditSchema> { }
export interface ProductCreate extends z.infer<typeof productCreateSchema> { }

export interface ProductResumeSolds extends z.infer<typeof productSchema> {
  sales: number
  totalAmount: number
}
