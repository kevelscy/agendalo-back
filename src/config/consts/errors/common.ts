type DictionaryKeys = 'PAGINATION_INVALID' |
  'ERROR_TO_GET_RESOURCE' |
  'INVALID_FIELDS' |
  'INVALID_ID' |
  'INVALID_AUTH' |
  'MISSING_FIELDS' |
  'NOT_FOUND' |
  'GENERIC_ERROR'

type DictionaryErrors = Record<DictionaryKeys, { message: string, code: number }>

export const COMMON_DICTIONARY_ERRORS: DictionaryErrors = {
  NOT_FOUND: {
    message: 'No se ha encontrado el recurso',
    code: 404
  },

  GENERIC_ERROR: {
    message: 'Ha ocurrido un error',
    code: 400
  },

  PAGINATION_INVALID: {
    message: 'Parametros invalidos',
    code: 400
  },

  ERROR_TO_GET_RESOURCE: {
    message: 'Error al obtener el recurso',
    code: 400,
  },

  INVALID_FIELDS: {
    message: 'Campos Invalidos',
    code: 400,
  },

  INVALID_ID: {
    message: 'ID invalido',
    code: 400,
  },

  INVALID_AUTH: {
    message: 'Credenciales Invalidas',
    code: 402,
  },

  MISSING_FIELDS: {
    message: 'Faltan Campos',
    code: 400,
  },
}