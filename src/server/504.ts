import { HttpError } from '../http'
import { ServerErrorResponse } from './index'

class Error extends HttpError implements ServerErrorResponse {
  status = 504
  message = 'Gateway Timeout'
  description = 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
}

export default Error
