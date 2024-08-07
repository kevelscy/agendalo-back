import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { FileExt } from '@/lib/schemas/common'

const firebaseConfig = {
  apiKey: 'AIzaSyD8dS0GORBB97p8wmFvEIuekP8h_ckvja0',
  authDomain: 'inventarealo.firebaseapp.com',
  projectId: 'inventarealo',
  storageBucket: 'inventarealo.appspot.com',
  messagingSenderId: '766936899549',
  appId: '1:766936899549:web:604ea13b97a1721fa2a034',
  measurementId: 'G-H8HWH3NBYV'
}

export const firebase = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export interface SaveFirebaseFileParams {
  filename: string
  path: string
  ext: FileExt
  file: Blob | File
}

export const saveFirebaseFile = async ({ filename, ext, path, file }: SaveFirebaseFileParams) => {
  const storage = getStorage()
  const storageRef = ref(storage, `${path}/${filename}.${ext}`);

  const snap = await uploadBytes(storageRef, file)

  return snap
}