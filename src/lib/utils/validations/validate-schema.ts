import z from 'zod'

export const validateZodDTO = async (schema: z.ZodType<any>, body: any): Promise<boolean> => {
  if (!body) return false

  const res = await schema.safeParseAsync(body)

  return res?.success
}