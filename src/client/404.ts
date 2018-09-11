import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 404
  message = 'Not Found'
  description = 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.'
}

export default Error
