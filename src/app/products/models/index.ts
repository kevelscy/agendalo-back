import { Schema, model, Types } from 'mongoose'

import { commonSchemaOptions } from '@/lib/utils/db/schemas-options'
import { Product, ProductImage, ProductStatus } from './schemas'

const PRODUCT_IMAGE_DB_SCHEMA = new Schema<ProductImage>({
  url: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    required: false
  }
}, commonSchemaOptions<ProductImage>())

const PRODUCT_DB_SCHEMA = new Schema<Omit<Product, 'id'>>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ProductStatus
  },
  images: [{
    type: Types.ObjectId,
    ref: 'product_image'
  }]
}, {
  versionKey: false, // Elimina el campo __v
  id: false, // Deshabilita el getter de id
  _id: true, // Mantenemos el _id en la base de datos
  toJSON: {
    virtuals: true, // Incluye los campos virtuales en JSON
    transform(doc, ret) {
      ret.id = ret._id; // Crea un campo `id` a partir de `_id`
      delete ret._id; // Elimina el campo `_id` de la respuesta JSON
    }
  }
})

export const ProductModel = model('product', PRODUCT_DB_SCHEMA)
export const ProductImageModel = model('product_image', PRODUCT_IMAGE_DB_SCHEMA)

export * from './schemas'