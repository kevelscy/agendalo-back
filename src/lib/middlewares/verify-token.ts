import { Handler, MaybeArray, OptionalHandler, SingletonBase } from "elysia/types"

export const verifyToken = ({ bearer, set, headers }) => {
  console.log({ bearer, headers })

  if (!bearer) {
    set.status = 400
    set.headers['WWW-Authenticate'] = `Bearer realm='sign', error="invalid_request"`

    return {
      data: null,
      info: null,
      error: {
        code: 400,
        message: 'Unauthorized'
      }
    }
  }
}