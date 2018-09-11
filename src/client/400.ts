import { HttpError } from '../http'
import { ClientErrorResponse } from './index'

class Error extends HttpError implements ClientErrorResponse {
  status = 400
  message = 'Bad Request'
  description = 'The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).'
}

export default Error
