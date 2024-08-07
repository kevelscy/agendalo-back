export type DictionaryKeys = 'PAGINATION_INVALID' | 'ERROR_TO_GET_RESOURCE' | 'INVALID_FIELDS' | 'INVALID_ID' | 'INVALID_AUTH' | 'MISSING_FIELDS'
export type DictionaryErrors = Record<DictionaryKeys, { message: string, code: number }>

export const DICTIONARY_ERRORS: DictionaryErrors = {
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