import hasher from 'argon2'

import { User, UserCreate, UserModel, UserSecurityModel } from '@/app/users/models'
import { SignUpPayload } from '../models'
import { userRepository } from '@/app/users/repository'
import { bussinessRepository } from '@/app/bussiness/repository'
import { convertFormdataToObject } from '@/lib/utils/convert-formdata-to-object'

// TODO: encrypt password
export const signUpAccount = async (payload: SignUpPayload): Promise<SignUpPayload> => {
  const { owner, bussiness } = convertFormdataToObject(payload) as SignUpPayload

  const ownerCreated = await userRepository().create(owner)

  const bussinessCreated = await bussinessRepository().create(bussiness)

  return {
    bussiness: bussinessCreated,
    owner: ownerCreated
  }
}

export const authRepository = () => {
  return {
    signUpAccount
  }
}