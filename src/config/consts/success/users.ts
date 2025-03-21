// export const USER_DICTIONARY_SUCCESS = {
//   USER_ACTIONS.CREATE: {
//     message: 'Creación de usuario exitosa',
//     code: 200
//   },

//   USER_ACTIONS.GET_ALL: {
//     message: 'Obtención de usuarios exitosa',
//     code: 200
//   },

//   USER_ACTIONS.GET: {
//     message: 'Obtención del usuario exitosa',
//     code: 200
//   },

//   USER_ACTIONS.EDIT: {
//     message: 'Edición del usuario exitosa',
//     code: 200
//   },

//   USER_ACTIONS.DELETE: {
//     message: 'Borrado del usuario exitoso',
//     code: 200
//   },
// }

type DictionaryKeys =
  'USER_GET_ALL_SUCCESS' |
  'USER_CREATE_SUCCESS' |
  'USER_DELETE_SUCCESS' |
  'USER_GET_SUCCESS' |
  'USER_EDIT_SUCCESS'

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