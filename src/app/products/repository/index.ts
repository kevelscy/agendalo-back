import { Product, ProductCreate, ProductEdit, ProductFilters, ProductImage, ProductImageModel, ProductModel, ProductQueries } from '../models'
import { applyFilters, applyQueries, generatePaginationResponse, paginate } from '@/lib/utils/pagination-helpers'
import { Params, Result } from '@/lib/schemas/http'
import { saveFile } from '@/lib/services/storage'
import { slugify } from '@/lib/utils/slugify'
import { isObjectEmpty } from '@/lib/utils/is-object-empty'

const formatImages = async (product: ProductCreate, bussinesId: string): Promise<ProductImage[]> => {
  const slug = slugify(product.name)
  const result: ProductImage[] = []

  let firstImage: ProductImage = null
  let secondImage: ProductImage = null
  let thirdImage: ProductImage = null
  let fourthImage: ProductImage = null

  const path = `${bussinesId}/products/${slug}`

  if (product?.firstImage) {
    const file = new File([product?.firstImage], product.name, { type: product?.firstImage.type })

    firstImage = await saveFile({
      ext: product.firstImage.type.replace('image/', ''),
      path,
      file: product.firstImage,
      filename: file.name,
    })

    result.push(firstImage)
  }

  if (product?.secondImage) {
    const file = new File([product?.secondImage], product.name, { type: product?.secondImage.type })

    secondImage = await saveFile({
      ext: product.secondImage.type.replace('image/', ''),
      path,
      file: product.secondImage,
      filename: file.name,
    })

    result.push(secondImage)
  }

  if (product?.thirdImage) {
    const file = new File([product?.thirdImage], product.name, { type: product?.thirdImage.type })

    thirdImage = await saveFile({
      ext: product.thirdImage.type.replace('image/', ''),
      path,
      file: product.thirdImage,
      filename: file.name,
    })

    result.push(thirdImage)
  }

  if (product?.fourthImage) {
    const file = new File([product?.fourthImage], product.name, { type: product?.fourthImage.type })

    fourthImage = await saveFile({
      ext: product.fourthImage.type.replace('image/', ''),
      path,
      file: product.fourthImage,
      filename: file.name,
    })

    result.push(fourthImage)
  }

  return result
}

export const getAll = async (params: Params<ProductQueries, ProductFilters> = {}, bussines: string): Promise<Result<Product[]>> => {
  const { pagination, filters, queries } = params
  let filter, query

  if (!isObjectEmpty(filters)) filter = applyFilters(filters)
  if (!isObjectEmpty(queries)) query = applyQueries(queries)

  const { limit: pageLimit, skip } = paginate(pagination)

  const products = await ProductModel.find({ ...filter, ...query })
    .limit(pageLimit)
    .skip(skip)

  const count = await ProductModel.countDocuments({ ...filter, ...query });

  const paginationInfo = generatePaginationResponse(pageLimit, pagination.page, count);

  return {
    pagination: paginationInfo,
    data: products
  }
}

export const getById = async (id: string, bussines: string): Promise<Product> => {
  const userFinded = await ProductModel.findById(id)
  return userFinded as Product
}

// TODO: encrypt password
const create = async (product, bussines: string) => {
  try {
    const images = await formatImages(product, bussines)

    const imgPromises = images.map(image => ProductImageModel.create(image))
    const imagesUploadedResults = await Promise.allSettled(imgPromises)

    const imagesUploaded = imagesUploadedResults
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value._id)

    const productCreated = await ProductModel.create({
      ...product,
      bussines,
      images: imagesUploaded,
    })

    const productCreatedJSON = productCreated.toJSON()

    return productCreatedJSON
  } catch (error) {
    console.error('Error creating product:', error)
    return null
  }
}

export const update = async (id: string, product: ProductEdit, bussines: string): Promise<Product> => {
  const userUpdated = await ProductModel.findByIdAndUpdate(id, product)
  return userUpdated as Product
}

export const remove = async (id: string, bussines: string): Promise<Product> => {
  const productDeleted = await ProductModel.findByIdAndDelete(id)
  console.log({ productDeleted })
  return productDeleted as Product
}

export const productRepository = ({ bussines }: { bussines: string }) => {
  return {
    getAll: (params: Params<ProductQueries, ProductFilters> = {}) => getAll(params, bussines),
    getById: (id: string) => getById(id, bussines),
    create: (product) => create(product, bussines),
    update: (id: string, product: ProductEdit) => update(id, product, bussines),
    delete: (id: string) => remove(id, bussines)
  }
}