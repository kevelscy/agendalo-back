import { Schema, model, Types } from 'mongoose'
import { IUser, IUserSecurity } from './schemas'

const USER_SECURITY_DB_SCHEMA = new Schema<IUserSecurity>({
  token: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
}, { versionKey: false })

const USER_DB_SCHEMA = new Schema<IUser>({
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
}, {
  versionKey: false,
  timestamps: true
})

export const UserModel = model('user', USER_DB_SCHEMA)
export const UserSecurityModel = model('user_security', USER_SECURITY_DB_SCHEMA)

export * from './schemas'