import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 413
  message = 'Payload Too Large'
  description = 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large"'
}

export default Error
