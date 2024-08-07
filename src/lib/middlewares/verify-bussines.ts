import { Handler, MaybeArray, OptionalHandler, SingletonBase } from "elysia/types"

export const verifyBussines = ({ headers, set }) => {
  const { bussines } = headers

  if (!bussines) {
    set.status = 401
    set.headers['WWW-Authenticate'] = `Bearer realm='sign', error="invalid_request"`

    return {
      result: null,
      info: null,
      error: {
        code: 401,
        message: 'No Autorizado'
      }
    }
  }
}