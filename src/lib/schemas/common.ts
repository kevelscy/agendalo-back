import { z } from 'zod'

export enum FileExt {
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
  WEBP = 'webp'
}

export const commonSchemas = () => {
  const string = z.string({ required_error: '* Requerido' })
  const boolean = z.boolean({ required_error: '* Requerido' })
  const number = z.number({ required_error: '* Requerido' })
  const image = z.object({ url: string, metadata: z.any().optional() })
  const file = z.any()
  const fileExt = z.nativeEnum(FileExt)
  const email = z.string({ required_error: 'Correo requerido' }).email({ message: 'Correo no valido' })
  const password = z.string({ required_error: 'Contraseña requerida' }).min(6, { message: 'Minimo 6 caracteres' })

  return {
    email,
    boolean,
    string,
    image,
    file,
    fileExt,
    number,
    password
  }
}