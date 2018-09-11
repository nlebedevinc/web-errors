import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 505
  message = 'HTTP Version Not Supported'
  description = 'The server does not support the HTTP protocol version used in the request.'
}

export default Error
