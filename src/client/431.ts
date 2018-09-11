import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 431
  message = 'Request Header Fields Too Large'
  description = 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.'
}

export default Error
