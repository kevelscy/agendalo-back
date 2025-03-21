export function isObjectEmpty(obj: Record<string, any>): boolean {
  if (!obj) return true

  return Object.entries(obj).length === 0;
}