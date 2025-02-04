import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/pagination-helpers'
import { Bussiness, BussinessCreate, BussinessEdit, BussinessFilters, BussinessImage, BussinessImageModel, BussinessModel, BussinessQueries, BussinessStatus } from '../models'
import { isObjectEmpty } from '@/lib/utils/is-object-empty'
import type { Params, Result } from '@/lib/schemas/http'
import { saveFile } from '@/lib/services/storage'
import { slugify } from '@/lib/utils/slugify'

const formatImage = async (bussiness: BussinessCreate, bussinesId: string): Promise<BussinessImage> => {
  const slug = slugify(bussiness.name)

  const path = `${bussinesId}/logos/${slug}`

  const file = new File([bussiness?.name], bussiness.name, { type: bussiness?.logo.type })

  const result = await saveFile({
    ext: bussiness.logo.type.replace('image/', ''),
    path,
    file: bussiness.logo,
    filename: file.name,
  })

  return result
}

export const getAll = async (params: Params<BussinessQueries, BussinessFilters> = {}): Promise<Result<Bussiness[]>> => {
  const { pagination, filters, queries } = params
  let filter = null
  let query = null

  if (!isObjectEmpty(filters)) filter = applyFilters(filters)
  if (!isObjectEmpty(queries)) query = applyQueries(queries)

  const { limit: pageLimit, skip } = paginate(pagination)

  console.log({ query, pageLimit, queries })

  const bussiness = await BussinessModel.find({ ...filter, ...query })
    .limit(pageLimit)
    .skip(skip)

  const count = await BussinessModel.countDocuments({ ...filter, ...query });

  const paginationInfo = generatePaginationResponse(pageLimit, pagination.page, count);

  return {
    pagination: paginationInfo,
    data: bussiness
  }
}

export const getById = async (id: string): Promise<Bussiness> => {
  const bussinessFinded = await BussinessModel.findById(id) as Bussiness
  return bussinessFinded
}

const create = async (bussiness: BussinessCreate): Promise<Bussiness> => {
  try {

    const BussinesToCreate = new BussinessModel({
      name: bussiness.name,
      status: BussinessStatus.ACTIVE,
      description: bussiness?.description || null
    })

    const logo = await formatImage(bussiness, BussinesToCreate._id.toString())
    const logoCreated = await BussinessImageModel.create(logo)

    if (logoCreated) BussinesToCreate.set('logo', logoCreated)

    const bussinessSaved = await BussinesToCreate.save()

    const bussinessCreatedJSON = bussinessSaved.toJSON()

    return bussinessCreatedJSON
  } catch (error) {
    console.error('Error creating bussiness:', error)
    return null
  }
}

export const update = async (id: string, bussiness: BussinessEdit): Promise<Bussiness> => {
  const bussinessUpdated = await BussinessModel.findByIdAndUpdate(id, bussiness) as Bussiness
  return bussinessUpdated
}

export const remove = async (id: string): Promise<Bussiness> => {
  const bussinessDeleted = await BussinessModel.findByIdAndDelete(id) as Bussiness
  console.log({ bussinessDeleted })
  return bussinessDeleted
}

export const bussinessRepository = () => {
  return {
    getAll: (params: Params<BussinessQueries, BussinessFilters> = {}) => getAll(params),
    getById: (id: string) => getById(id),
    create: (bussiness: BussinessCreate) => create(bussiness),
    update: (id: string, bussiness: BussinessEdit) => update(id, bussiness),
    delete: (id: string) => remove(id)
  }
}