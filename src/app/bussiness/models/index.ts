import { Schema, model, Types } from 'mongoose'

import { Bussiness, BussinessImage, BussinessStatus } from './schemas'
import { commonSchemaOptions } from '@/lib/utils/db/schemas-options'

const BUSSINESS_IMAGE_DB_SCHEMA = new Schema<BussinessImage>({
  url: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    required: false
  }
}, commonSchemaOptions<BussinessImage>())

const BUSSINESS_DB_SCHEMA = new Schema<Omit<Bussiness, 'id'>>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: BussinessStatus
  },
  logo: {
    type: Types.ObjectId,
    ref: 'bussiness_image'
  }
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

export const BussinessModel = model('bussiness', BUSSINESS_DB_SCHEMA)
export const BussinessImageModel = model('bussiness_image', BUSSINESS_IMAGE_DB_SCHEMA)

export * from './schemas'