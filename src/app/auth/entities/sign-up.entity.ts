import { z } from 'zod'
import { signUpInputSchema } from '../dtos/sign-up.dto'

export type SignUpInput = z.infer<typeof signUpInputSchema>
export type SignUpResponse = any
