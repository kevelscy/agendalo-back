import { Prisma } from '@prisma/client'
import { Context } from 'elysia'

import { DICTIONARY_ERRORS } from '@/config/consts/errors/errors'

export interface ErrorResponse {
  /**
   * Código de estado HTTP que se devolverá en la respuesta.
   * @example 404
   */
  statusCode: number
  /**
   * Lista de errores con detalles como el mensaje y el código.
   * @example [{ message: 'Recurso no encontrado', code: 404 }]
   */
  errors: { message: string; code: number }[]
  result: null
  info: null
}

export class CustomError extends Error {
  /**
   * Contiene los detalles del error, incluidos los mensajes y códigos asociados.
   * @param errors Un arreglo de claves de errores de `DICTIONARY_ERRORS` que serán mapeados.
   * @param set Objeto de contexto de Elysia que se usará para establecer el código de estado de la respuesta.
   */
  errors: { message: string; code: number }[]
  statusCode: number

  constructor(errors: (keyof typeof DICTIONARY_ERRORS)[], set?: Context['set']) {
    super('Custom Error')

    // Mapear errores usando el diccionario de errores
    this.errors = errors.map(errorKey => DICTIONARY_ERRORS[errorKey])
    this.statusCode = this.errors[0]?.code || 500

    // Si 'set' está disponible, asignar el código de estado HTTP
    if (set) {
      set.status = this.statusCode
    }
  }
}

/**
 * Crea un nuevo error personalizado y, opcionalmente, ajusta el código de estado de Elysia.
 * @param errors Un arreglo de claves de errores de `DICTIONARY_ERRORS` que se usará para obtener los mensajes y códigos.
 * @param set Objeto de contexto de Elysia que se usará para modificar el código de estado.
 * @returns Un nuevo objeto `CustomError` con los errores y código de estado.
 * @example
 * createCustomError(['MISSING_FIELDS'], set)
 */
export const createCustomError = (errors: (keyof typeof DICTIONARY_ERRORS)[], set?: Context['set']) => {
  return new CustomError(errors, set)
}

/**
 * Maneja un error y retorna una respuesta con un código de estado y detalles.
 * Si el error es una instancia de `CustomError`, extrae la información de ella.
 * Si es un error de Prisma, maneja el error según el código de error de Prisma.
 * Si es otro tipo de error, retorna un error genérico.
 * @param error El error que se desea manejar. Puede ser una instancia de `CustomError`, un error de Prisma, o un error genérico.
 * @returns Un objeto `ErrorResponse` con el código de estado y los detalles del error.
 * @example
 * const response = handleError(error)
 */
export const handleError = (error: unknown): ErrorResponse => {
  console.error('[Error Handler]:', error)

  if (error instanceof CustomError) {
    return {
      statusCode: error.statusCode,
      errors: error.errors,
      result: null,
      info: null
    }
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return handlePrismaError(error)
  }

  if (error instanceof Error) {
    return {
      statusCode: DICTIONARY_ERRORS.GENERIC_ERROR.code,
      errors: [{ message: error.message, code: DICTIONARY_ERRORS.GENERIC_ERROR.code }],
      result: null,
      info: null
    }
  }

  return {
    statusCode: 500,
    errors: [{ message: 'Ocurrió un error inesperado', code: 500 }],
    result: null,
    info: null
  }
}

/**
 * Maneja un error conocido de Prisma y retorna una respuesta con el código de estado adecuado.
 * @param error El error de Prisma que contiene el código de error.
 * @returns Un objeto `ErrorResponse` con el código de estado y los detalles del error.
 * @example
 * const response = handlePrismaError(error)
 */
const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError): ErrorResponse => {
  switch (error.code) {
    case 'P2002':
      return { statusCode: 409, errors: [{ message: 'Este recurso ya existe', code: 409 }], result: null, info: null }
    case 'P2025':
      return { statusCode: 404, errors: [{ message: 'El recurso no existe', code: 404 }], result: null, info: null }
    default:
      return { statusCode: 500, errors: [{ message: 'Error de base de datos', code: 500 }], result: null, info: null }
  }
}
