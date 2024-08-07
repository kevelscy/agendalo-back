import { z } from 'zod'

import { commonSchemas, FileExt } from '@/lib/schemas/common'
import { saveFirebaseFile } from './firebase'

const { image } = commonSchemas()

export interface SaveFileParams {
  filename: string
  path: string
  ext: FileExt
  file: Blob | File
}

export const saveFile = async (params: SaveFileParams): Promise<z.infer<typeof image>> => {
  const result = await saveFirebaseFile(params)

  return {
    url: result.ref.fullPath
  }
}