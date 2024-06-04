import z from 'zod'

export const validateSchema = (schema: z.ZodObject<any>, body: any): boolean => {
  if (!body) return false

  const res = schema.safeParse(body)
  return res?.success
}