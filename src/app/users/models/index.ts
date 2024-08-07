import { Schema, model, Types } from 'mongoose'

import { commonSchemaOptions } from '@/lib/utils/schemas-options'
import { User, UserSecurity } from './schemas'

const USER_SECURITY_DB_SCHEMA = new Schema<UserSecurity>({
  token: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
}, commonSchemaOptions<UserSecurity>())

const USER_DB_SCHEMA = new Schema<User>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    required: false
  },
  pid: {
    type: String,
    required: false
  },
  security: {
    type: Types.ObjectId,
    ref: 'user_security'
  }
}, commonSchemaOptions<User>())

export const UserModel = model('user', USER_DB_SCHEMA)
export const UserSecurityModel = model('user_security', USER_SECURITY_DB_SCHEMA)

export * from './schemas'