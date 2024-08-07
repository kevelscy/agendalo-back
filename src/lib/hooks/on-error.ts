export const handleErrors = ({ code, error, set }) => {
  console.error('HANDLE SERVER ERRORS', { code, error, set })

  if (code === 'NOT_FOUND') {
    set.status = 404

    return {
      result: null,
      errors: [{
        code: 404,
        message: 'Not Found :('
      }]
    }
  }
}