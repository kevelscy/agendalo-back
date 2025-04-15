import hasher from 'argon2'

import { userServices } from '@/app/users/services'
import { bussinessRepository } from '@/app/business/services'
import { convertFormdataToObject } from '@/lib/utils/formaters/convert-formdata-to-object'
import { SignUpInput, SignUpResponse } from '../entities/sign-up.entity'
import { UserRole, UserStatus } from '@/app/users/entities/user.entity'
import { usersSecurityServices } from '@/app/users-security/services'

// TODO: encrypt password
export const signUpAccount = async (payload: SignUpInput): Promise<SignUpResponse> => {
  const { owner, business } = convertFormdataToObject(payload) as SignUpInput

  const ownerCreated = await userServices().create({
    email: owner.email,
    firstName: owner.firstName,
    lastName: owner.lastName,
    phone: owner.phone,
    role: UserRole.Values.ADMIN,
    status: UserStatus.Values.ACTIVE,
  })

  const hashedPassword = await hasher.hash(owner.password)

  const userSecurityCreated = await usersSecurityServices().create({
    password: hashedPassword,
    user: null
  })

  const bussinessCreated = await bussinessRepository().create(business)

  return {
    business: bussinessCreated,
    owner: ownerCreated,
    security: userSecurityCreated
  }
}

export const authRepository = () => {
  return {
    signUpAccount
  }
}