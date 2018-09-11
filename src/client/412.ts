import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 412
  message = 'Precondition Failed'
  description = 'The server does not meet one of the preconditions that the requester put on the request.'
}

export default Error
