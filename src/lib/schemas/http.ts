export interface IHandleErrorResponse {
  message: string
  code: string | number
}

export interface IHandleResponse<TData = any> {
  data: TData | null
  info: any
  error: IHandleErrorResponse | null
}