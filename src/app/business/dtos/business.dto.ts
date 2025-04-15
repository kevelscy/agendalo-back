import { BusinessCreateInputSchema, BusinessSchema, BusinessUpdateInputSchema } from '@/db/prisma/zod'

export const BusinessQueriesDTO = BusinessSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true,
    businessType: true,
    description: true,
    rif: true,
    logo: true,
    city: true,
    municipality: true,
    addressId: true,
    ownerId: true,
})

export const BusinessFiltersDTO = BusinessSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true,
  name: true,
  description: true,
  rif: true,
  logo: true,
  city: true,
  municipality: true,
  phone: true,
  addressId: true,
  ownerId: true,
})

export const BusinessCreateDTO = BusinessCreateInputSchema
export const BusinessEditDTO = BusinessUpdateInputSchema
