import { PRODUCT_ACTIONS } from '@/app/products/models/actions'
import { USER_ACTIONS } from '@/app/users/models/actions'

export const DICTIONARY_SUCCESS = {
  PRODUCTS: {
    [PRODUCT_ACTIONS.CREATE]: {
      message: 'Creación de producto exitosa',
      code: 200
    },

    [PRODUCT_ACTIONS.GET_ALL]: {
      message: 'Obtención de productos exitosa',
      code: 200
    },

    [PRODUCT_ACTIONS.GET]: {
      message: 'Obtención del producto exitosa',
      code: 200
    },

    [PRODUCT_ACTIONS.EDIT]: {
      message: 'Edición del producto exitosa',
      code: 200
    },

    [PRODUCT_ACTIONS.DELETE]: {
      message: 'Borrado del producto exitoso',
      code: 200
    },
  },

  USERS: {
    [USER_ACTIONS.CREATE]: {
      message: 'Creación de usuario exitosa',
      code: 200
    },

    [USER_ACTIONS.GET_ALL]: {
      message: 'Obtención de usuarios exitosa',
      code: 200
    },

    [USER_ACTIONS.GET]: {
      message: 'Obtención del usuario exitosa',
      code: 200
    },

    [USER_ACTIONS.EDIT]: {
      message: 'Edición del usuario exitosa',
      code: 200
    },

    [USER_ACTIONS.DELETE]: {
      message: 'Borrado del usuario exitoso',
      code: 200
    },
  },
}