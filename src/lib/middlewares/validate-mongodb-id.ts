import mongoose, { type ObjectId } from 'mongoose'

export const validateMongoId = (id: string | ObjectId) => mongoose.isValidObjectId(id)