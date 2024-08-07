import z from 'zod'

export const validateSchema = async (schema: z.ZodObject<any>, body: any): Promise<boolean> => {
  if (!body) return false

  const res = await schema.safeParseAsync(body)

  return res?.success
}