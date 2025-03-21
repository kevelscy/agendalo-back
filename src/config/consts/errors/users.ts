type DictionaryKeys =
  'USER_CREATE_ERROR' |
  'USER_EXIST_ERROR' |
  'USER_EDIT_ERROR'

type DictionaryErrors = Record<DictionaryKeys, { message: string, code: number }>

export const USER_DICTIONARY_ERRORS: DictionaryErrors = {
  USER_CREATE_ERROR: {
    message: 'No se ha pudo crear el usuario',
    code: 404
  },

  USER_EXIST_ERROR: {
    message: 'Ya existe este usuario',
    code: 401
  },

  USER_EDIT_ERROR: {
    message: 'Error al editar el usuario',
    code: 401
  },
}