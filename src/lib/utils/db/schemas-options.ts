import { FlatRecord, SchemaOptions } from 'mongoose'

export const commonSchemaOptions = <Entity>(): SchemaOptions<FlatRecord<Omit<Entity, 'id'>>> => ({
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