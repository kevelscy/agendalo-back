export interface FirebaseStorageResultMetaData {
  type: string
  bucket: string
  generation: string
  metageneration: string
  fullPath: string
  name: string
  size: number,
  timeCreated: string
  updated: string
  md5Hash: string
  cacheControl: any,
  contentDisposition: string
  contentEncoding: string
  contentLanguage: any,
  contentType: string,
  customMetadata: any,
  ref: [any]
}