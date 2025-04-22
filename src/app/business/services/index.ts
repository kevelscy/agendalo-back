import { prisma } from '@/lib/db/prisma/client'
import { Business, BusinessCreateInput, BusinessEditInput, BusinessFilters, BusinessQueries } from '@/business/entities/business.entity'

import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/db/mongoose-pagination-helpers'
import { isObjectEmpty } from '@/lib/utils/validations/is-object-empty'
import type { Params, Result } from '@/lib/schemas/http'
import { slugify } from '@/lib/utils/formaters/slugify'
import { saveFile } from '@/lib/services/storage'
import { FileExt } from '@/lib/schemas/common'

const formatImage = async (bussiness: BusinessCreateInput, bussinesId: string): Promise<any> => {
  const slug = slugify(bussiness.name)

  const path = `${bussinesId}/logos/${slug}`

  const file = new File([bussiness?.name], bussiness.name, { type: bussiness?.logo })

  const result = await saveFile({
    // ext: bussiness.logo.type.replace('image/', ''),
    ext: FileExt.PNG,
    path,
    file: bussiness.logo as any,
    filename: file.name,
  })

  return result
}

export const getAll = async (params: Params<BusinessQueries, BusinessFilters> = {}): Promise<Result<Business[]>> => {
  const res = await prisma.business.findMany()

  return {
    pagination: null,
    data: res
  }
}

export const getById = async (id: string): Promise<Business> => {
  const res = await prisma.business.findUnique({ where: { id } })
  return res
}

const create = async (payload: BusinessCreateInput): Promise<Business> => {
  const res = await prisma.business.create({ data: payload })
  return res
}

export const update = async (id: string, payload: BusinessEditInput): Promise<Business> => {
  const res = await prisma.business.update({
    where: { id },
    data: payload
  })

  return res
}

export const remove = async (id: string): Promise<Business> => {
  const res = await prisma.business.delete({ where: { id } })
  return res
}

export const bussinessRepository = () => {
  return {
    getAll: (params: Params<BusinessQueries, BusinessFilters> = {}) => getAll(params),
    getById: (id: string) => getById(id),
    create: (bussiness: BusinessCreateInput) => create(bussiness),
    update: (id: string, bussiness: BusinessEditInput) => update(id, bussiness),
    delete: (id: string) => remove(id)
  }
}