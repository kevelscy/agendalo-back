export interface Info {
  code: number
  message: string
}

export interface Pagination {
  page: number
  limit: number
  count?: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
}

export enum Sort {
  ASC,
  DESC
}

export type Queries<T> = {
  [K in keyof T]: string
}

export type Filters<T> = {
  [K in keyof T]: string
}

export interface Params<EntityQueries = any, EntityFilters = any> {
  queries?: Queries<EntityQueries>
  filters?: Filters<EntityFilters>
  pagination?: Pagination
}

export interface Result<TData> {
  data: TData
  pagination?: Pagination
}

export interface IHandleErrorResponse {
  message: string
  context?: any
}

export interface IHandleResponse<TData> {
  info?: Info
  errors?: IHandleErrorResponse[]
  result?: Result<TData>
}

export interface Success {
  message: string
}