import hasher from 'argon2'

import { User, UserCreateDTO, UserModel, UserSecurityModel } from '@/app/users/dtos/user.dto'
import { SignUpPayload } from '../models'
import { userServices } from '@/app/users/services'
import { bussinessRepository } from '@/app/bussiness/services'
import { convertFormdataToObject } from '@/lib/utils/formaters/convert-formdata-to-object'

// TODO: encrypt password
export const signUpAccount = async (payload: SignUpPayload): Promise<SignUpPayload> => {
  const { owner, bussiness } = convertFormdataToObject(payload) as SignUpPayload

  const ownerCreated = await userServices().create(owner)

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