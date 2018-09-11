import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 502
  message = 'Bad Gateway'
  description = 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
}

export default Error
