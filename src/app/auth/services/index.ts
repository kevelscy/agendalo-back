import hasher from 'argon2'

import { SignUpInput, SignUpResponse } from '@/auth/entities/sign-up.entity'
import { UserRole, UserStatus } from '@/users/entities/user.entity'
import { usersSecurityServices } from '@/users-security/services'
import { bussinessRepository } from '@/business/services'
import { userServices } from '@/users/services'

import { convertFormdataToObject } from '@/lib/utils/formaters/convert-formdata-to-object'
import { BusinessCreateInput } from '@/app/business/entities/business.entity'

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

  const bussinessCreated = await bussinessRepository().create(business as BusinessCreateInput)

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