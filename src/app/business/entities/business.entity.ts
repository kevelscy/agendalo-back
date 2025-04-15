import { z } from 'zod'

import { BusinessCreateInputSchema, BusinessSchema, BusinessUpdateInputSchema } from '@/lib/db/prisma/zod'
import { BusinessFiltersDTO, BusinessQueriesDTO } from '../dtos/business.dto'

// import { commonSchemas } from '@/lib/schemas/common'

// const { string } = commonSchemas()

// export enum BussinessStatus {
//   ACTIVE = 'ACTIVE',
//   INACTIVE = 'INACTIVE'
// }

// export const bussinessStatusSchema = z.nativeEnum(BussinessStatus)

// export const bussinessImage = z.object({
//   url: z.string().url(),
//   metadata: z.record(string, z.any()).optional()
// })

// export const bussinessSchema = z.object({
//   id: string,
//   name: string,
//   status: bussinessStatusSchema,
//   description: string.optional(),
//   logo: bussinessImage.optional(),
// })

// export const bussinessEditSchema = bussinessSchema.extend({}).omit({
//   id: true,
//   logo: true
// })

// export const bussinessCreateSchema = bussinessSchema.extend({
//   logo: z.any().optional(),
// }).omit({
//   id: true,
// })

// export const BUSSINESS_QUERIES_SCHEMA = z.object({
//   name: string
// })

// export const BUSSINESS_FILTERS_SCHEMA = z.object({
//   status: string
// })

// export interface BussinessQueries extends z.infer<typeof BUSSINESS_QUERIES_SCHEMA> { }
// export interface BussinessFilters extends z.infer<typeof BUSSINESS_FILTERS_SCHEMA> { }

// export interface Bussiness extends z.infer<typeof bussinessSchema> { }
// export interface BussinessImage extends z.infer<typeof bussinessImage> { }
// export interface BussinessEdit extends z.infer<typeof bussinessEditSchema> { }
// export interface BussinessCreate extends z.infer<typeof bussinessCreateSchema> { }

// export interface BussinessResume extends z.infer<typeof bussinessSchema> {
//   count: number
// }

export type Business = z.infer<typeof BusinessSchema>
export type BusinessQueries = z.infer<typeof BusinessQueriesDTO>
export type BusinessFilters = z.infer<typeof BusinessFiltersDTO>
export type BusinessEditInput = z.infer<typeof BusinessUpdateInputSchema>
export type BusinessCreateInput = z.infer<typeof BusinessCreateInputSchema>
